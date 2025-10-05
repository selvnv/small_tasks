document.addEventListener('DOMContentLoaded', () => {
    const addImageButton = document.getElementById("addImageButton");

    const imageContainer = document.getElementById("imageContainer");

    addImageButton.addEventListener("click", () => {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300/200?random=${getRandomImageSeed()}`;
    newImage.alt = "some random photo was here";
    newImage.className = "imageRadius";

    imageContainer.appendChild(newImage);
    removeImageButtonClassSwitch();
    })
})