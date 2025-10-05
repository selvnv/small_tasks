document.addEventListener("DOMContentLoaded", () => {
    const refreshImagesButton = document.getElementById("refreshImagesButton");
    const imageContainer = document.getElementById("imageContainer");

    refreshImagesButton.addEventListener("click", () => {
        // Получить все изображения внутри контейнера и изменить ссылки в них
        imageContainer.querySelectorAll('img').forEach(image => {
            image.src = `https://picsum.photos/300/200?random=${getRandomImageSeed()}`;
        })
    });
})