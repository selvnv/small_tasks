#### Часто используемые команды

* Предварительное сохранение файла с зависимостями проекта: `uv pip freeze > requirements.txt`
* Сборка образа приложения: `docker build --tag simple_server:latest .`
* Просмотр собранных образов: `docker images`
* Создание и запуск контейнера на основе образа: `docker run --name simple_server -p "8000:8000" simple_server`
* Остановить запущенный контейнер: `docker stop simple_server`
* Запустить остановленный контейнер: `docker start simple_server`
* Просмотр всех контейнеров (даже остановленных): `docker ps -a`
* Просмотр логов контейнера runtime: `docker container logs simple_server --follow`