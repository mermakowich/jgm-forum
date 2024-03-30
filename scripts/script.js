const loginButton = document.querySelector(".login");
const avatarPhoto = document.querySelector(".avatar");


loginButton.addEventListener("click", function(event) {
  // Предотвратить перезагрузку страницы
  event.preventDefault();

  // Скрыть форму
  loginButton.classList.add("hidden");

  // Отобразить вторую часть
  avatarPhoto.classList.remove("hidden");
});