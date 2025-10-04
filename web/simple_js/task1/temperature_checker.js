function read_number(message="Enter some number value") {
    value = prompt(message);

    if (isNaN(value)) {
        throw Error(`The value (${value}) is not a number`);
    }

    return Number(value);
}

(() => {
    let unit;
    unit = prompt("Enter temperature units of measurement (c/f)");

    try {
        value = read_number("Enter the temperature value");
        switch (unit) {
            case "c":
                break;
            case "f":
                value = ((value - 32) * 5 / 9).toFixed(2)
                break;
            default:
                throw Error(`The entered units of measurement (${unit}) are not supported`);
        }
        if (value >= 30) {
            console.log("It is hot outside");
        } else if (value > 20) {
            console.log("It is warm outside");
        } else {
            console.log("It is cold outside");
        }
    } catch (error) {
        console.error(error);
    }
})();