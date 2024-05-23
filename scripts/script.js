const loginButton = document.querySelector(".login");
const avatarPhoto = document.querySelector(".avatar");


function authorize() {
  // Предотвратить перезагрузку страницы
  event.preventDefault();

  // Скрыть форму
  loginButton.classList.add("hidden");

  // Отобразить вторую часть
  avatarPhoto.classList.remove("hidden");
};

const btnUp = {
  el: document.querySelector('.btn-up'),
  hide() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_show');
  },
  show() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_show');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


const searchButton = document.querySelector(".search-button")
const searchResults = document.querySelector(".search-result")

function search(event) {
  searchResults.classList.remove(".hidden");
}

function search(event) {

  searchResults.classList.remove("hidden");

};

searchButton.addEventListener("click", search)



// // JavaScript:
// function fadeIn(elementId, speed) {
//     const element = document.getElementById(elementId);
//     let opacity = 0;
//     const step = 1 / speed;

//     const interval = setInterval(function() {
//         if (opacity >= 1) {
//             clearInterval(interval);
//         }
//         opacity += step;
//         element.style.opacity = opacity;
//     }, speed / 1000);

//     // Прокрутка экрана к элементу
//     element.scrollIntoView({ behavior: 'smooth' });
// }

// // Пример использования:
// // При удалении класса "hidden" вызовите функцию fadeIn:
// fadeIn('.search-result', 500); // 500 миллисекунд (0.5 секунды) для плавного появления

// устанавливаем триггер для модального окна (название можно изменить)
const modalTrigger = document.querySelector(".login");

// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];

// функция для корректировки положения body при появлении ползунка прокрутки
function bodyMargin() {
  bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// при длинной странице - корректируем сразу
bodyMargin();

// событие нажатия на триггер открытия модального окна
modalTrigger.addEventListener("click", function () {
  console.log("hello")
  // делаем модальное окно видимым
  modalBackground.style.display = "flex";

  // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
  if (windowInnerWidth >= 1366) {
    bodyMargin();
  }

  // позиционируем наше окно по середине, где 175 - половина ширины модального окна
  modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
});

// нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  if (windowInnerWidth >= 1366) {
    bodyMargin();
  }

});

// закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
      bodyMargin();
    }
  }
});



const externButton1 = document.getElementById("1cent");
const externButton2 = document.getElementById("2cent");
const pres2 = document.getElementById("1pres2");
const pres3 = document.getElementById("1pres3");
const bres3 = document.getElementById("2pres3");


externButton1.addEventListener("click", function (event) {
  pres2.style.display = "flex";
  pres3.style.display = "flex";

});

externButton2.addEventListener("click", function (event) {
  bres3.style.display = "flex";
})

// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listener
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

const authBut = document.querySelector(".authorize-btn");
const logInp = document.querySelector(".login-name");
const pasInp = document.querySelector(".login-password");

authBut.addEventListener("click", function (event) {
  if (logInp.value === "" || pasInp.value === "") {
    alert("Error!")
  } else {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
      bodyMargin();
    }
    authorize();

  }

})

const regBtn = document.querySelector(".reg-btn");
const regForm = document.querySelector(".registration");
const autForm = document.querySelector(".authorization");

regBtn.addEventListener("click", function(event) {
  autForm.classList.add(".hidden")
  regForm.classList.remove(".hidden")

});

const news1 = document.querySelector(".news-item1");
const news2 = document.querySelector(".news-item2");
const news3 = document.querySelector(".news-item3");

const newsText1 = document.querySelector(".news-text1");
const newsText2 = document.querySelector(".news-text2");
const newsText3 = document.querySelector(".news-text3");

const newsRight = document.getElementById("news-right");

news1.addEventListener("click", function(event) {
  newsText2.style.display = "none";
  newsText3.style.display = "none";
  news2.classList.remove("news-active")
  news3.classList.remove("news-active")
  newsText1.style.display = "flex";
  news1.classList.add("news-active")
})

news2.addEventListener("click", function(event) {
  newsText1.style.display = "none";
  newsText3.style.display = "none";
  news1.classList.remove("news-active")
  news3.classList.remove("news-active")
  newsText2.style.display = "flex";
  news2.classList.add("news-active")
})

news3.addEventListener("click", function(event) {
  newsText2.style.display = "none";
  newsText1.style.display = "none";
  news1.classList.remove("news-active")
  news2.classList.remove("news-active")
  newsText3.style.display = "flex";
  news3.classList.add("news-active")
})

