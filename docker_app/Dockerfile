FROM python:3.12-alpine

WORKDIR /server

# Выключить буферизацию вывода для отправки логов приложения в терминал
ENV PYTHONUNBUFFERED=1

# Копирование файла с зависимостями проекта
COPY ./requirements.txt ./
# Установка зависимостей
RUN pip install -r requirements.txt

# Копирование файлов из контекста в образ относительно рабочей директории
COPY ./server ./
COPY ./deploy.sh ./
COPY ./db.env ./django.env ./

# Создать пользователя и передать права владения на все файлы проекта ему
RUN adduser -D serverapp && \
    chown -R serverapp:serverapp /server

# Переключиться на пользователя server-app для выполнения следующих команд (RUN, ENTRYPOINT, CMD)
USER serverapp

CMD ["/server/deploy.sh"]