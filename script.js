document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navLinks");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const icon = document.getElementById("themeIcon");
    if (document.body.classList.contains("light")) {
      icon.src = "https://cdn.inspireuplift.com/uploads/images/seller_products/30458/1701829736_FNAFSecurityBreach-Sundrop.png";
    } else {
      icon.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21aa24d8-3194-48c2-967e-940ec5ba00b4/dexewmk-4494fc5e-8a1a-44cd-bbff-4a31c5664adc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxYWEyNGQ4LTMxOTQtNDhjMi05NjdlLTk0MGVjNWJhMDBiNFwvZGV4ZXdtay00NDk0ZmM1ZS04YTFhLTQ0Y2QtYmJmZi00YTMxYzU2NjRhZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M0GHZmT_M93M30HgkdKjKL_9wn1lcyqkHkSyisOQfKE";
    }
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Обработка формы регистрации
const form = document.getElementById("registrationForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    console.log("Имя пользователя:", username);
    console.log("Email:", email);
    console.log("Пароль:", password);
    alert("Регистрация прошла успешно!");
    form.reset();
  });
}

// Свайп для мобильных
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const nav = document.getElementById("navLinks");
  if (touchEndX < touchStartX - 100) {
    nav.classList.remove("active");
  }
  if (touchEndX > touchStartX + 100) {
    nav.classList.add("active");
  }
}

// Плавная прокрутка якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
