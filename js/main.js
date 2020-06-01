
if(location.hash=="" && window.location.pathname=="/"){
  $('#Login').removeClass("hidden");
  $('#all').addClass("hidden");
  $('#foot1').addClass("hidden");
}
$(document).ready(function() {

$('a.blog-button').click(function() {

  if (location.hash && location.hash == "#blog") return;
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
  $('.main-post-list').removeClass('hidden');

  currentWidth = $('.panel-cover').width();
  if (currentWidth < 2000) {
    $('.panel-cover').addClass('panel-cover--collapsed');
  } else {
    $('.panel-cover').css('max-width',currentWidth);
    $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
  }
});
$('#login-submit').click(function(){
  var user = $('#user').val();
  var pwd = $('#pwd').val();
  if(user == "admin" && pwd=="123456"){
    $('#Login').addClass("hidden");
    $('#all').removeClass("hidden");
    $('#foot1').removeClass("hidden");
  }else{
    alert("账户或者密码错误！！");
  }


})
if (window.location.hash && window.location.hash == "#blog") {
  $('.panel-cover').addClass('panel-cover--collapsed');
  $('.main-post-list').removeClass('hidden');
  $('#Login').addClass("hidden");
  $('#all').removeClass("hidden");

}

if (window.location.pathname.substring(0, 5) == "/tag/") {
  $('.panel-cover').addClass('panel-cover--collapsed');
  console.log("i am here");
}

$('.btn-mobile-menu__icon').click(function() {
  console.log("i am here");
  // 导航按钮被点击
  // this.style.backgroundColor = '#fff'; 设置颜色后会自动消失
});
});
