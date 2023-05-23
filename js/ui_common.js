$(function () {
  //헤더 모바일 전체메뉴
  $('#header .btn_wrap').on('click', function () {
    $('body').addClass('on');
    $('#header .m_gnb_wrap').addClass('on');
  });
  $('#header .m_gnb_wrap .btn_close').on('click', function () {
    $('body').removeClass('on');
    $('#header .m_gnb_wrap').removeClass('on');
  });

  // 메인 visual 섹션 애니메이션
  $('[class*=animate_fade]').each(function () {
    var _this = $(this);
    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var st = $(this).scrollTop();

        if (st >= posY - $(this).outerHeight() + 150) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // 메인 스토어 섹션
  var storeSlide = new Swiper('.store_slide', {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 10000,

    slidesPerView: 'auto',
    spaceBetween: 15,
  });

  // quick top버튼
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 100) {
        $('.quick_wrap .btn_top').fadeIn(600);
      } else {
        $('.quick_wrap .btn_top').fadeOut(0);
      }
    })
    .trigger('scroll');

  $('.quick_wrap .btn_top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

  // 서브페이지

  //서포터즈 페이지 intro 슬라이드
  var imgSlide = new Swiper('.img_slide', {
    loop: true,
    speed: 1,
    autoplay: {
      delay: 2000,
    },
    simulateTouch: false,
  });

  var img_pd_slide = new Swiper('.img_pd_slide', {
    loop: true,
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });
});
