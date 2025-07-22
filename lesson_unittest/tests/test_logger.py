import unittest
from parameterized import parameterized
from app.main import Calculator
from app.error import InvalidInputException

class TestLogger(unittest.TestCase):
    def setUp(self):
        self.calc = Calculator()

    def tearDown(self):
        ...

    # Тест на обычное правильное использование функции.
    @parameterized.expand([
        ("Test app.main.log() with correct int_int args", 9, 3, 2),
        ("Test app.main.log() with correct int_int args", 1, 3, 0),
        ("Test app.main.log() with correct float_int args", 0.25, 4, -1),
        ("Test app.main.log() with correct float_float args", 0.25, 0.5, 2),
    ])
    def test_log_correct_input_data(self, test_name, argument, base, expected_result):
        print(f'{test_name}: arg({argument}, {type(base)}), base({base}, {type(base)})')
        actual_result = self.calc.log(argument, base)
        self.assertEqual(actual_result, expected_result)

    # Тест на неправильные типы входных данных (например, если вместо чисел передается строка)
    @parameterized.expand([
        ("Test app.main.log() with incorrect type args (str_int)", '1', 3, TypeError),
        ("Test app.main.log() with incorrect type args (int_str)", 1, '25', TypeError),
        ("Test app.main.log() with incorrect type args (str_str)", 'test', 'abc', TypeError),
    ])
    def test_log_incorrect_types(self, test_name, argument, base, expected_result):
        print(f'{test_name}: arg({argument}, {type(base)}), base({base}, {type(base)})')
        with self.assertRaises(expected_result):
            self.calc.log(argument, base)

    # Тест на то, что функция бросает ошибку InvalidInputException, если вводные данные не входят в ОДЗ функции.
    @parameterized.expand([
        ("Test app.main.log() with incorrect base = 1", 10, 1, InvalidInputException),
        ("Test app.main.log() with incorrect argument = 0", 0, 10, InvalidInputException),
        ("Test app.main.log() with incorrect argument < 0", -1, 10, InvalidInputException),
    ])
    def test_log_incorrect_values(self, test_name, argument, base, expected_result):
        print(f'{test_name}: arg({argument}, {type(base)}), base({base}, {type(base)})')
        with self.assertRaises(expected_result):
            self.calc.log(argument, base)