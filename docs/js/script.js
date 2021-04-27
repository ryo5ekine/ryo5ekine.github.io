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

let scroll = function(elem){
  var winHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var showClass = 'show';
  var timing = 200; // 100pxコンテンツが見えたら次のif文がtrue
  if (scrollTop >= contentsPOS - winHeight + timing){
    $(elem).addClass(showClass);
  } else {
    $(elem).removeClass(showClass);
  }
}

$(window).on('load',function(i,elem){
$("#door-anime").delay(1000).fadeOut(500);
scroll(elem);
});


//②スクロールエフェクト//

$(function(){
$('.one').each(function(i, elem){
$(window).on('scroll resize', function(){
  scroll(elem);
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