document.addEventListener('DOMContentLoaded', () => {
    const removeImageButton = document.getElementById("removeImageButton");
    const imageContainer = document.getElementById("imageContainer");

    removeImageButton.addEventListener("click", () => {
        if (imageContainer.childElementCount > 1) {
            imageContainer.removeChild(imageContainer.lastChild);
        }

        removeImageButtonClassSwitch();
    });
})