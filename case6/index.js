
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Buka dan tutup hamburger menu
hamburger.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("show");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
});

// Tutup menu setelah item navigasi diklik
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Buka menu navigasi");

        // Mengatur menu yang sedang aktif
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Tutup menu jika pengguna menekan tombol Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Buka menu navigasi");
    }
});
