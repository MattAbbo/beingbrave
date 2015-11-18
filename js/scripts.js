// Empty JS for your own code to be here

$('#btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('#btnPrevious').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});

// $('.img-wrap img:gt(0)').hide();

// $('.next').click(function() {
//     $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
// });

// $('.prev').click(function() {
//     $('.img-wrap img:first-child').fadeOut();
//     $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
//     $('.img-wrap img:first-child').fadeIn();
// });