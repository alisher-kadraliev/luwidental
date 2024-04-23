tailwind.config = {
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },

      colors: {
        primary: "#9AC9C1",
        secondary: "#151515",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1140px",
      },
    },
  },
};

// ===== responsive navbar
let navbarToggler = document.querySelector("#navbarToggler");
const navbarCollapse = document.querySelector("#navbarCollapse");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("navbarTogglerActive");
  navbarCollapse.classList.toggle("hidden");
});

//===== close navbar-collapse when a  clicked
document
  .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
  .forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    })
  );

// ===== Sub-menu
const submenuItems = document.querySelectorAll(".submenu-item");
submenuItems.forEach((el) => {
  el.querySelector("a").addEventListener("click", () => {
    el.querySelector(".submenu").classList.toggle("hidden");
  });
});

// lang
function openLangMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// lang
// swiper

//swiper-1
let swiperHero = new Swiper(".swiper-hero", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});
let swiperWhy = new Swiper(".swiper-why", {
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".custom-pagination", // Use your custom pagination selector
    clickable: true, // Enable bullet click
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
let swiperService = new Swiper(".swiper-service", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".custom-pagination", // Use your custom pagination selector
    clickable: true, // Enable bullet click
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
let swiperVideo = new Swiper(".swiper-video", {
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".custom-pagination", // Use your custom pagination selector
    clickable: true, // Enable bullet click
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
let swiperTestimonial = new Swiper(".swiper-testimonials", {
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".custom-pagination", // Use your custom pagination selector
    clickable: true, // Enable bullet click
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
});
// swiper

// whatsapp
function cookieAcceptWhatsapp() {
  createCookie("wp-cookie", "1", 5);
}

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    expires +
    "; path=/";
}

function readCookie(name) {
  var nameEQ = encodeURIComponent(name) + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

var yesCookie = readCookie("p-cookie");
if (yesCookie == 1) {
  $(".cookie-policy").hide();
}

const firstSession = readCookie("wp-cookie");
$(document).on("click", "#whatsapp-popup", function () {
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
  setTimeout(function () {
    $(".loading-animation").hide();
    $(".whatsapp-message-wrapper").css("display", "flex").hide().fadeIn("slow");
  }, 1000);
});
$(document).on("click", ".close_whatsapp", function () {
  $("#whatsapp-chat");
  $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
});
if (firstSession == "1") {
  $(".whatsapp-wrapper").removeClass("show-whatsapp");
  $(".whatsapp-wrapper").addClass("hide-whatsapp");
} else {
  cookieAcceptWhatsapp();
  $(".whatsapp-wrapper")
    .delay(10000)
    .queue(function () {
      $(this).addClass("show-whatsapp");
      $(this).removeClass("hide-whatsapp");
    });
  $(".whatsapp-message-wrapper")
    .delay(13000)
    .queue(function () {
      $(this).addClass("di");
      $(this).removeClass("loading-animation");
    });
  $(".loading-animation")
    .delay(13000)
    .queue(function () {
      $(this).addClass("dinone");
    });
}

// whatsapp

// video
$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    // Optional settings
    loop: true, // Enable looping through the gallery
    // Add more options as needed
  });
});

// video
// navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".ud-header");
  if (window.scrollY > 100) {
    header.classList.add("is-fixed");
  } else {
    header.classList.remove("is-fixed");
  }
});

// navbar
