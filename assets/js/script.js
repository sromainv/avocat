// BACK TO TOP
// Scroll detection
window.addEventListener("scroll", function() {
  if(window.scrollY > 300) {
    $('.back-to-top').fadeIn(500);
  } else {
    $('.back-to-top').fadeOut(300);
  }
}, false);
// Animation
$('.back-to-top').on("click", function(){
  $('html, body').animate({
    scrollTop: 0
	}, 600);
	return false;
});


// BLOG - Hide/show
$(".art-banner").click(function(e){
    e.preventDefault()
    var nb = $(this).attr('id');
    $('#art-'+nb).slideToggle(200);
});
