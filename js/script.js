/* ============================
   WELCOME TEXT + SAVE NAME
============================ */
function replaceName() {
    const savedName = localStorage.getItem("userName");

    let name = savedName
        ? savedName
        : prompt("Masukkan nama Anda:", "Harfi");

    if (name) {
        document.getElementById("welcome-text").innerText =
            "Hi " + name + ", Welcome To Danu Company Profile";

        // Simpan nama agar tidak isi ulang
        localStorage.setItem("userName", name);
    }
}

replaceName();

/* ============================
   MESSAGE US FORM + POPUP
============================ */
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("messageForm");
    const popup = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closePopup");
    const nameInput = document.getElementById("input-name");

    // Auto isi nama jika sudah ada
    const savedName = localStorage.getItem("userName");
    if (savedName && nameInput) {
        nameInput.value = savedName;
    }

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil data input
        const name = document.getElementById("input-name").value;
        const birthdate = document.getElementById("input-birthdate").value;
        const message = document.getElementById("input-message").value;
        const gender = document.querySelector(
            'input[name="gender"]:checked'
        ).value;

        // Simpan nama terbaru
        localStorage.setItem("userName", name);

        // Isi popup
        document.getElementById("popup-name").textContent = name;
        document.getElementById("popup-birthdate").textContent = birthdate;
        document.getElementById("popup-gender").textContent = gender;
        document.getElementById("popup-message").textContent = message;

        // Tampilkan popup
        popup.style.display = "flex";
    });

    // Tutup popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
        // localStorage.removeItem("userName"); // aktifkan jika ingin reset total
    });

});
