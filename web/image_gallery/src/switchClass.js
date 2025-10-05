function removeImageButtonClassSwitch() {
    const removeImageButton = document.getElementById("removeImageButton");
    const imageContainer = document.getElementById("imageContainer");

    if (imageContainer.childElementCount == 1) {
        removeImageButton.className = "buttonClassADisabled";
    } else {
        if (removeImageButton.className == "buttonClassADisabled") {
            removeImageButton.className = "buttonClassA";
        }
    }
}