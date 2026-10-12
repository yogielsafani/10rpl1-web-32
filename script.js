// ============================
// DARK MODE
// ============================

const darkMode = document.getElementById("darkMode");


// cek mode yang tersimpan
const savedMode = localStorage.getItem("darkMode");


if (savedMode === "true") {

    document.body.classList.add("dark");

    darkMode.textContent = "☀";

}


// tombol dark mode
darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        darkMode.textContent = "☀";

        localStorage.setItem("darkMode", "true");

    } else {

        darkMode.textContent = "☾";

        localStorage.setItem("darkMode", "false");

    }

});



// ============================
// PROJECT MODAL
// ============================

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");


// membuka project
function openProject(title, description) {

    modalTitle.textContent = title;

    modalDescription.textContent = description;

    modal.classList.add("active");

}


// menutup project
function closeProject() {

    modal.classList.remove("active");

}


// klik area luar modal
modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeProject();

    }

});


// tombol ESC
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProject();

    }

});