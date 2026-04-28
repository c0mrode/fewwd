particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150, // Количество снежинок
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Белый цвет
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false // ОТКЛЮЧАЕМ ЛИНИИ
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Скорость движения
      "direction": "bottom", // Движение вниз
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      }
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 6,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});