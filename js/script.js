
//open, close modal
const modal = document.querySelector(".modal");
const modalActive = document.querySelector(".modal-active");
const btnReserve = document.querySelector(".header__reserve-btn");
const modalClose = document.querySelector(".modal__close");



btnReserve.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});


//Ajax form
$(document).ready(function() {
  $(".modal__form").submit(function(event) {
    event.preventDefault();

    // Получаем данные формы
    var formData = $(this).serialize();

    // Отправляем данные на сервер с помощью AJAX
    $.ajax({
      type: "POST", // Можно использовать "GET" или "POST"
      url: "ссылка_на_обработчик_формы.php", // Указываем путь к файлу, который будет обрабатывать данные формы на сервере
      data: formData,
      success: function(response) {
        // Выводим результаты отправки на страницу
        $("#result").html(response);
      },
      error: function(xhr, status, error) {
        // В случае ошибки выводим сообщение об ошибке
        $("#result").html("Произошла ошибка: " + error);
      }
    });
  });
});


//slider
const slider = document.querySelector('.slider__wrapper');
const slides = document.querySelectorAll('.slider__slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
}

document.querySelector('.slider__button-prev').addEventListener('click', prevSlide);
document.querySelector('.slider__button-next').addEventListener('click', nextSlide);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.slider__container').addEventListener('swiped-left', nextSlide);
  document.querySelector('.slider__container').addEventListener('swiped-right', prevSlide);
});

  const arrowPrev = document.getElementById('arrow-prev');
  const arrowNext = document.getElementById('arrow-next');

  arrowPrev.addEventListener('click', function() {
    arrowPrev.setAttribute('stroke', '#D3B47F');
    arrowNext.setAttribute('stroke', '#FFF');
  });

  arrowNext.addEventListener('click', function() {
    arrowPrev.setAttribute('stroke', '#FFF');
    arrowNext.setAttribute('stroke', '#D3B47F');
  });

//burger
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__navigation");
  burgerItem.addEventListener("click", () => {
    menu.classList.toggle("header__nav-active");
    if (menu.classList.contains("header__nav-active")) {
      burgerItem.classList.add("header-rotate");
      burgerItem.classList.remove("header_rotate-back");
    } else {
      burgerItem.classList.remove("header-rotate");
      burgerItem.classList.add("header_rotate-back");
    }
  });
  menu.addEventListener("click", () => {
    if (menu.classList.contains("header__nav-active")) {
      menu.classList.remove("header__nav-active");
      burgerItem.classList.add("header_rotate-back");
    }
    console.log();
  });
})();