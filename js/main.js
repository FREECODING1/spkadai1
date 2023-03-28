(function(){
  //設定
  var interval =3000; // 切り替わりの間隔（ミリ秒）
  var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
  $(".l-header__list img").hide();
  $(".l-header__list img:first").addClass("active").show();
  
  var changeImage = function(){
      var $active = $(".l-header__list img.active");
      var $next = $active.next("img").length?$active.next("img"):$(".l-header__list img:first");
    
    $active.fadeOut(fade_speed).removeClass("active");
      $next.fadeIn(fade_speed).addClass("active");
  }
  setInterval(changeImage,interval);
  }());

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-hero').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });
  
  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-service').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-about').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-teacher').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-voice').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-flow').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.p-message').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.l-footer').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });


  $(function () {
    $(window).scroll(function () {
      $(".p-contact__container").each(function () {
        var elemPos = $(this).offset().top; /* 要素の位置を取得 */
        var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
        var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
        if (scroll > elemPos - windowHeight) {
          /* 要素位置までスクロール出来たときに動作する */
          $(this).addClass("effect-scroll");
        }
      });
    });
    jQuery(window).scroll();
  });
