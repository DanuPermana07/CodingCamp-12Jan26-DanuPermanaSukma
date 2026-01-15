document.addEventListener("DOMContentLoaded", function () {

    function askUserName() {
        const welcomeText = document.getElementById("welcome-text");
        if (!welcomeText) return;

        let name = sessionStorage.getItem("userName");

        // Jika belum ada di session (pertama kali masuk)
        if (!name) {
            let inputName = prompt("Masukkan nama Anda:");

            if (inputName === null || inputName.trim() === "") {
                name = "Guest";
            } else {
                name = inputName.trim();
            }

            sessionStorage.setItem("userName", name);
        }

        welcomeText.innerText =
            `Hi ${name}, Welcome To Danu Company Profile`;
    }

    askUserName();


    const form = document.getElementById("messageForm");
    const popup = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closePopup");
    const nameInput = document.getElementById("input-name");

    // Auto isi nama dari session
    const sessionName = sessionStorage.getItem("userName");
    if (sessionName && nameInput) {
        nameInput.value = sessionName;
    }

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim() || "Guest";
        const birthdate = document.getElementById("input-birthdate").value;
        const message = document.getElementById("input-message").value;

        const genderInput = document.querySelector(
            'input[name="gender"]:checked'
        );
        const gender = genderInput ? genderInput.value : "-";

        // Update session name
        sessionStorage.setItem("userName", name);

        document.getElementById("popup-name").textContent = name;
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
