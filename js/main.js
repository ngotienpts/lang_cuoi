document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // header mb
  var headerMb = document.querySelector(".header-mb");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // header mb
      if (headerMb) {
        var headerBar = headerMb.querySelector(".header-mb__bar");
        var headerExtend = headerMb.querySelector(".header-mb__extend");
        var overlay = headerMb.querySelector(".slide-overlay");
        headerBar.onclick = function () {
          if (headerMb.matches(".active") && this.matches(".active")) {
            headerMb.classList.remove("active");
            this.classList.remove("active");
          } else {
            headerMb.classList.add("active");
            this.classList.add("active");
          }
        };

        headerExtend.onclick = function () {
          if (headerMb.matches(".active") && this.matches(".active")) {
            headerMb.classList.remove("active");
            this.classList.remove("active");
          } else {
            headerMb.classList.add("active");
            this.classList.add("active");
          }
        };
        overlay.onclick = function () {
          if (headerMb.matches(".active") && headerBar.matches(".active")) {
            headerMb.classList.remove("active");
            headerBar.classList.remove("active");
          }
          if (headerMb.matches(".active") && headerExtend.matches(".active")) {
            headerMb.classList.remove("active");
            headerExtend.classList.remove("active");
          }
        };
      }
      // hide cac element khi click ra ngoai
      // document.addEventListener("click", function (e) {});
    },

    // slide box top
    slideBoxTop: function () {
      var swiper = new Swiper(".mySwiperBoxTop", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    // slide box top mb
    slideBoxTopMb: function () {
      var swiper = new Swiper(".mySwiperBoxTopMb", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    },
    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 60,
      });
    },
    // fancybox
    fancybox: function () {
      if (fancyboxes) {
        fancyboxes.forEach(function (fancybox) {
          $(".fancybox-full a").fancybox();
        });
      }
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide box top
      this.slideBoxTop();
      // slide box top mb
      this.slideBoxTopMb();
      // sticky bar home 1
      this.stickyHome1();
      // fancybox
      this.fancybox();
    },
  };

  app.start();
});
