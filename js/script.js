// clockjs
function handleTickInit(tick) {
  Tick.helper.interval(function () {
    var d = Tick.helper.date();
    tick.value = {
      sep: ":",
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };
  });
}

// stopwatch
var dashboard = document.getElementById("page_name");
//Start button
var start_button = document.getElementById("start_button");
//Stop button
var stop_button = document.getElementById("timer_submit");
//timer
var hour = document.getElementById("hour");
var mint = document.getElementById("min");
var secd = document.getElementById("sec");

if (dashboard != null && localStorage.getItem("start_button") == null) {
  var hr = 0;
  var min = 0;
  var sec = 0;
} else if (dashboard != null && localStorage.getItem("start_button") != null) {
  $("#start_button").prop("disabled", true);
  $("#start_button").removeClass("btn-outline-success");
  $("#start_button").addClass("btn-light");
  start_button.innerHTML = "Running";
}

if (start_button) {
  start_button.addEventListener("click", function () {
    localStorage.setItem("start_button", "clicked");
    $("#start_button").prop("disabled", true);
    $("#start_button").removeClass("btn-outline-success");
    $("#start_button").addClass("btn-light");
    start_button.innerHTML = "Running";
    var total_time = document.getElementById("total_time");
    if (total_time) {
      total_time.innerHTML = "Counting...";
    }
    timerCycle();
  });
}
if (stop_button) {
  stop_button.addEventListener("click", function () {
    localStorage.clear();
    hour.innerHTML = "00";
    mint.innerHTML = "00";
    secd.innerHTML = "00";
    var total_time = document.getElementById("total_time");
    if (total_time) {
      total_time.innerHTML = hr + ":" + min + ":" + sec;
    }

    clearTimeout(cycle);
    hr = 0;
    min = 0;
    sec = 0;
    $("#start_button").prop("disabled", false);
    $("#start_button").addClass("btn-success");
    $("#start_button").removeClass("btn-light");
    start_button.innerHTML = "Start";
  });
}

if (dashboard == null && localStorage.getItem("start_button") != null) {
  sec = localStorage.getItem("sec");
  min = localStorage.getItem("min");
  hr = localStorage.getItem("hr");
  timerCycle();
} else if (dashboard != null && localStorage.getItem("start_button") != null) {
  sec = localStorage.getItem("sec");
  min = localStorage.getItem("min");
  hr = localStorage.getItem("hr");
  timerCycle();
}
function timerCycle() {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  sec = sec + 1;

  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }
  if (min == 60) {
    hr = hr + 1;
    min = 0;
    sec = 0;
  }

  if (sec < 10 || sec == 0) {
    sec = "0" + sec;
  }
  if (min < 10 || min == 0) {
    min = "0" + min;
  }
  if (hr < 10 || hr == 0) {
    hr = "0" + hr;
  }

  localStorage.setItem("hr", hr);
  localStorage.setItem("min", min);
  localStorage.setItem("sec", sec);

  hour.innerHTML = hr;
  mint.innerHTML = min;
  secd.innerHTML = sec;

  cycle = setTimeout(timerCycle, 1000);
}

new WOW().init();
AOS.init();

// lightgallery
const $galleryContainer = document.getElementById("gallery-container");

const customButtons = `<button type="button" id="lg-toolbar-prev" aria-label="Previous slide" class="lg-toolbar-prev lg-icon">  </button><button type="button" id="lg-toolbar-next" aria-label="Next slide" class="lg-toolbar-next lg-icon">  </button>`;

$galleryContainer.addEventListener("lgInit", (event) => {
  const pluginInstance = event.detail.instance;

  const $toolbar = pluginInstance.outer.find(".lg-toolbar");
  $toolbar.prepend(customButtons);
  document.getElementById("lg-toolbar-prev").addEventListener("click", () => {
    pluginInstance.goToPrevSlide();
  });
  document.getElementById("lg-toolbar-next").addEventListener("click", () => {
    pluginInstance.goToNextSlide();
  });
});

lightGallery($galleryContainer, {
  speed: 500,
  controls: false,
  plugins: [lgZoom],
});
// mixitup

const containerEl = document.querySelector(".list");

var mixer = mixitup(containerEl, {
  selectors: {
    target: ".mix",
    control: ".control",
  },
  animation: {
    duration: 300,
  },
});

// curvedtext
var bezier = function (t) {
  var px = [100.0, 350.0, 500.0, 900.0],
    py = [400.0, 50.0, 500.0, 200.0],
    ax = [
      px[0],
      3.0 * (px[1] - px[0]),
      3.0 * (px[2] - 2.0 * px[1] + px[0]),
      px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0],
    ],
    ay = [
      py[0],
      3.0 * (py[1] - py[0]),
      3.0 * (py[2] - 2.0 * py[1] + py[0]),
      py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0],
    ],
    cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
    cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

  return {
    x: cx,
    y: cy,
  };
};

$("#text3").curvedText({
  curve: bezier,
  domain: [0.0, 1.0],
  viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 },
});

// jquery
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// ripplejs
$(document).ready(function () {
  $(".clicky").yarp({
    colors: ["white"],
    duration: 700,
  });
});

// parallaxjs
parallax($(".img"), 15, true);

var data = [
  { speed: 30, blur: 3, scale: 0.8 },
  { speed: 40, index: 2 },
  { speed: 30, blur: 2, scale: 0.7 },
  { speed: 60, index: 2 },
  { speed: 20, blur: 3, scale: 0.5 },
  { speed: 30, index: 2 },
  { speed: 50 },
  { speed: 30, index: 2, scale: 0.5 },
];

$(".p_img").each(function (i, o) {
  $(this).parallax(data[i]);
});

// silkslider

$(".regular").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
});

// owl-careousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    items: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

// loadmore
$(".some-list").simpleLoadMore({
  item: "div",
  count: 10,
  btnHTML: '<a href="#" class="load-more__btn">Load More</a>',
  btnText: "View More",
  btnWrapper: "",
  btnWrapperClass: "",
  cssClass: "load-more",
  itemsToLoad: 3,
  showCounter: false,
  easing: "fade",
  easingDuration: 400,
  onLoad: function ($items, $btn) {},
  onNextLoad: function ($items, $btn) {},
  onComplete: function () {},
});
