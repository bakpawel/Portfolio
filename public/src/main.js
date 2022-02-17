$(document).ready(function () {
  let navbar = $(".navbar");
  let sidebar = $(".media");
  let toTheTopBtn = $(".btn-back-to-top");
  let navLinks = $("nav a.nav-link");
  let header = $("header");

  $(window).scroll(function () {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    if ($(window).scrollTop() > windowHeight / 1.1) {
      navbar.addClass("sticky");
      header.css({ paddingTop: "74px" });
      navbar.css({ opacity: "1", zIndex: "5" });
      toTheTopBtn.css({ opacity: "1", zIndex: "5" });
      if (windowWidth > 990) {
        navbar.css({ height: "9%" });
      }
    } else {
      navbar.css({ opacity: "0" });
      header.css({ paddingTop: "0" });
      toTheTopBtn.css({ opacity: "0", zIndex: "-1" });
      // setTimeout(navbar.removeClass("sticky"), 5000);
      navbar.removeClass("sticky");
    }

    if ($(window).scrollTop() > windowHeight / 2) {
      sidebar.addClass("showBar");
    } else {
      navbar.css({ opacity: "1" });
      header.css({ paddingTop: "0" });
      sidebar.removeClass("showBar");
    }

    let windowTop = $(this).scrollTop();

    navLinks.each(function (e) {
      if (windowTop >= $($(this).attr("href")).offset().top - 100) {
        $("a.active").removeClass("active");

        $(this).addClass("active");
      }
    });
  });

  //scroll to top

  toTheTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  //add active to link on click

  $("a.nav-link").click(function () {
    $(".navbar-nav").find("a.active").removeClass("active");
    $(this).addClass("active");
  });

  //add .active to nav link on scroll to section.

  $(window).scroll(function (e) {
    //scroll from top
  });
});
