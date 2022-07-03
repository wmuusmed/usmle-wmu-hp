(function () {
$(window).load(function(){
    setTimeout(function(){
        $('#loading-img').fadeOut(300);
        $('#loading-bg').fadeOut(300);
        $("#loading").css("display", "block");
        $('#loading').animate({"opacity":"1"},500);
    },300);
});
})(jQuery);


jQuery(function() {
 var appear = false;
 var pagetop = $('#page_top');
 $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
     if (appear == false) {
       appear = true;
       pagetop.stop().animate({
         'right': '0px' //右から0pxの位置に
       }, 300); //0.3秒かけて現れる
     }
   } else {
     if (appear) {
       appear = false;
       pagetop.stop().animate({
         'right': '-50px' //右から-50pxの位置に
       }, 300); //0.3秒かけて隠れる
     }
   }
 });
 pagetop.click(function () {
   $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
   return false;
 });
});



$(window).load(function() {
  var tl = new TimelineMax({
      paused: true
    }),
    tlback = new TimelineMax({
      paused: true
    }),
    intro = new TimelineMax();

  intro
    .from('.phone', 1, {
      autoAlpha: 0
    })
    .from('.hello', 0.5, {
      autoAlpha: 0
    }, 0.5)

  tl
    .to('.hello', 0.3, {
      autoAlpha: 0
    })
    .set('.home', {
      className: '+=active'
    })
    .set('.item', {
      scale: 1
    }) // fix for a bug when on of the item was appearing at 0.5 scale
    .to('.home', 0.1, {
      scale: 1.2,
      yoyo: true,
      repeat: 1
    })
    .to('.home', 0.3, {
      x: 20,
      y: 20,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0)
    .staggerFrom('.item', 0.7, {
      left: 20,
      top: 20,
      autoAlpha: 0,
      scale: 0.5,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1);

  tlback
    .set('.home', {
      className: '-=active'
    })
    .staggerTo('.item', 0.7, {
      left: 20,
      top: 20,
      autoAlpha: 0,
      scale: 0.5,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .to('.hello', 0.3, {
      autoAlpha: 1
    })
    .to('.home', 0.3, {
      x: 0,
      y: 0,
      ease: Power2.easeOut
    }, 0.5);

  $(document).on('click', '.home:not(.active)', function(e) {
    event.preventDefault();
    tl.play(0);
  });

  document.getElementById("n1").onclick = function() {
    window.location.href = "index.html";
  };
  document.getElementById("n2").onclick = function() {
    window.location.href = "introduction.html";
  };
  document.getElementById("n3").onclick = function() {
    window.location.href = "activity.html";
  };
  document.getElementById("n4").onclick = function() {
    window.location.href = "access.html";
  };

  $(document).on('click', '.home.active, .item', function(e) {
    event.preventDefault();
    TweenMax.to($(this), 0.1, {
      scale: 1.2,
      yoyo: true,
      repeat: 1,
      onComplete: function() {
        tlback.play(0)
      }
    });
  });
});





$(window).scroll(function (){
    $('.fadein1red').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

$(window).scroll(function (){
  $('.fadein1blue').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.fadein2').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});


$(window).scroll(function (){
  $('.slideRin').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});


$(window).scroll(function (){
  $('.slideRinimg').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});


$(window).scroll(function (){
  $('.slideRinbtn').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});



$(window).scroll(function (){
  $('.slideLin').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});


$(window).scroll(function (){
  $('.slideLinimg').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});


$(window).scroll(function (){
  $('.slideLinbtn').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('.slideBin').each(function(){
    var elemPos = $(this).offset().top,
    scroll = $(window).scrollTop(),
    windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    }
  });
});
