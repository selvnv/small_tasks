function refreshImages() {
    const imageContainer = document.getElementById("imageContainer");

    // Назначение обработчика удаления стиля загрузки изображения
    // Добавление стиля загрузки изображению
    imageContainer.querySelectorAll('img').forEach(image => {
        image.addEventListener("load", (event) => event.target.classList.remove("loadingImage"));
        image.classList.add("loadingImage");
    })

    // Получить все изображения внутри контейнера и изменить ссылки в них
    imageContainer.querySelectorAll('img').forEach(image => {
        image.src = `https://picsum.photos/1000/700?random=${getRandomImageSeed()}`;
    })
}

function addImage() {
    // Получить элемент-контейнер изображений
    const imageContainer = document.getElementById("imageContainer");

    // Создать элемент-изображение
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/1000/700?random=${getRandomImageSeed()}`;
    newImage.alt = "some random photo was here";

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("singleImageContainer");
    imageWrapper.addEventListener("click", zoomImage);
    imageWrapper.appendChild(newImage);

    // Добавить элемент-изображение в обёртке в элемент-контейнер
    imageContainer.appendChild(imageWrapper);
    removeImageButtonClassSwitch();
}

function removeImage() {
    // Получить элемент-контейнер изображений
    const imageContainer = document.getElementById("imageContainer");

    // Если в контейнере больше одного элемента, удалить последний
    if (imageContainer.childElementCount > 1) {
        imageContainer.removeChild(imageContainer.lastChild);
    }

    // Вызвать функцию, которая делает кнопку удаления недоступной, если остался только 1 элемент
    removeImageButtonClassSwitch();
}

function zoomImage(event) {
    if (event.target.tagName == "IMG") {
        const parentElement = event.target.parentElement;
        parentElement.classList.toggle("fullScreenImageContainer");
    } else if (event.target.classList.contains("fullScreenImageContainer")) {
        event.target.classList.toggle("fullScreenImageContainer");
    }
}

function initEvents() {
    // Получить кнопку для обновления изображений по id. Назначить событие (функцию-обработчик) на клик
    document.querySelector("#refreshImagesButton").addEventListener("click", refreshImages);

    // Получить кнопку для добавления изображения по id. Назначить событие на клик
    document.querySelector("#addImageButton").addEventListener("click", addImage);

    document.querySelector("#removeImageButton").addEventListener("click", removeImage);

    document.querySelectorAll(".singleImageContainer").forEach(element => {
        element.addEventListener("click", zoomImage);
    })
}

// Событие при загрузке дерева документа
window.addEventListener('DOMContentLoaded', initEvents);