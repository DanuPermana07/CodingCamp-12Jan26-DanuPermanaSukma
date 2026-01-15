document.addEventListener("DOMContentLoaded", function () {


    function replaceName() {
        const welcomeText = document.getElementById("welcome-text");
        if (!welcomeText) return;

        let name = localStorage.getItem("userName");

        if (!name) {
            let inputName = prompt("Masukkan nama Anda:");

            if (inputName === null || inputName.trim() === "") {
                name = "Guest";
            } else {
                name = inputName.trim();
            }

            localStorage.setItem("userName", name);
        }

        welcomeText.innerText =
            `Hi ${name}, Welcome To Danu Company Profile`;
    }

    replaceName();

    /* ============================
       MESSAGE US FORM + POPUP
    ============================ */

    const form = document.getElementById("messageForm");
    const popup = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closePopup");
    const nameInput = document.getElementById("input-name");

    // Auto isi nama di form
    const savedName = localStorage.getItem("userName");
    if (savedName && nameInput) {
        nameInput.value = savedName;
    }

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const birthdate = document.getElementById("input-birthdate").value;
        const message = document.getElementById("input-message").value;

        const genderInput = document.querySelector(
            'input[name="gender"]:checked'
        );
        const gender = genderInput ? genderInput.value : "-";

        // Update nama terbaru
        localStorage.setItem("userName", name || "Guest");

        document.getElementById("popup-name").textContent = name || "Guest";
        document.getElementById("popup-birthdate").textContent = birthdate;
        document.getElementById("popup-gender").textContent = gender;
        document.getElementById("popup-message").textContent = message;

        popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });

});
