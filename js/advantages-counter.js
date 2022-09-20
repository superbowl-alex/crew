'use strict';
window.addEventListener('load', windowLoad);

function windowLoad() {
  // Функція ініціалізації
  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll('[data-digits-counter]');
    if (digitsCounters) {
      digitsCounters.forEach(digitsCounter => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  }
  // Функція анімації
  function digitsCountersAnimate(digitsCounter) {
    let startTimeStamp = null;
    const duration = 1000;
    const finishValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;
    const step = timestamp => {
      if (!startTimeStamp) {
        startTimeStamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimeStamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(progress * (startPosition + finishValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Пуск при скролі (появі секції advantages)
  let options = {
    treshold: 1,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
        observer.unobserve(targetElement);
      }
    });
  }, options);

  let observedSection = document.querySelector('.advantages-section');
  observer.observe(observedSection);
}
