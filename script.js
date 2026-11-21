// Mengambil tombol menu
const menuButton = document.getElemenById("menu-button");

// Mengambil daftar navigasi
const navMenu = document.querySelector(".nav-menu");

// Ketika tombol diklik
menuButton.addEventListener("click", function() {

    // Menambahkan atau menghapus class active
    navMenu.classList.toggle("active");
});

// Menutup menu setelah salah satu link diklik
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click",function() {

        navMenu.classList.remove("active");
    })
})

// Menampilkan pesan di console
console.log("Portofolio Muhamad Fiqri berhasil dimuat!");