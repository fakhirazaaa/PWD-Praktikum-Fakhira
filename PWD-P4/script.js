const scrollTopBtn = document.getElementById("scrollTopBtn");

// menangani event scroll
window.onscroll = function () {
  // mmeriksa jka scroll down > 500px
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};

// aksi klo klik tombol
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // efek scroll halus kembali ke atas
  });
});