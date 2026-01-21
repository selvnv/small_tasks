function getFromData(from) {
    const formData = new FormData(from);



    return {
        name: formData.has("name") ? formData.get("name") : "не указано",
        email: formData.get("email") ? formData.get("email") : "не указана",
        phone: formData.has("phone_number") ? formData.get("phone_number") : "не указан",
        city: formData.has("city") ? formData.get("city") : "не указан",
        agree: formData.get("agree") ? "предоставлено" : "не предоставлено",
    };
}

function displayFromData(data) {
    const outputElement = document.querySelector(".output_box");

    const htmlText = `
        <h3>=== Введённые данные ===</h3>
        <p>Имя: ${data.name}</p>
        <p>Почта: ${data.email}</p>
        <p>Телефон: ${data.phone}</p>
        <p>Город: ${data.city}</p>
        <p>Согласие на рассылку: ${data.agree}</p>
    `;

    outputElement.innerHTML = htmlText;
}

function processFormData(event) {
    const form = event.target;

    const formData = getFromData(form);

    displayFromData(formData);
}

function init() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {event.preventDefault();});
    form.addEventListener("submit", processFormData);
}

window.addEventListener("DOMContentLoaded", init);