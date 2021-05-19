/* Fadein*/
jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });
  
  // ヘッダーメニュー//
  $('.burger-btn').on('click',function(){//.btn_triggerをクリックすると
    $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
   });
  
  //ローディングアニメーション//
  
  // $(window).on('load',function(){
  //   $("#door-anime").delay(2000).fadeOut(1000);//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  // });
  
  
  //スクロールエフェクト//
  
  $(function(){
    $('.one').each(function(i, elem){
        var contentsPOS = $(elem).offset().top;
        $(window).on('load scroll resize', function(){
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var showClass = 'show';
            var timing = 200; // 100pxコンテンツが見えたら次のif文がtrue
            if (scrollTop >= contentsPOS - winHeight + timing){
              $(elem).addClass(showClass);
            } else {
              $(elem).removeClass(showClass);
            }
        });
    });
  });
  
  