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

/* スタート */

//logoの表示
// $(window).on('load',function(){
//   $("#door-anime").delay(2000).fadeOut(1000);//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
// });

/* スクロール効果 */

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




/*　トップに戻る */

$(function(){
// TOPに戻るボタン
var topBtn = $('#page-top');
topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
var w = $(window).width();
if ($(this).scrollTop() > 100) {
topBtn.fadeIn();
} else {
topBtn.fadeOut();
}
});
//スムーススクロールでページトップへ
topBtn.click(function () {
$('body,html').animate({
scrollTop: 0
}, 500);
return false;
});
});