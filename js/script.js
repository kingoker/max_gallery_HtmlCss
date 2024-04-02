// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  mousewheel: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




// Time Counter
function countdown() {
    const timer = document.getElementById('timer');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    let hours = 0; // Установите время в часах
    let minutes = 23; // Установите время в минутах
    let seconds = 0; // Установите время в секундах

    setInterval(updateTimer, 1000);

    function updateTimer() {
      seconds--;

      if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
          minutes = 59;
          hours--;

          if (hours < 0) {
            clearInterval(updateTimer);
            timer.innerHTML = "Время истекло";
          }
        }
      }

      hoursSpan.textContent = pad(hours);
      minutesSpan.textContent = pad(minutes);
      secondsSpan.textContent = pad(seconds);
    }

    function pad(number) {
      return (number < 10) ? '0' + number : number;
    }

    updateTimer();
  }

countdown();
