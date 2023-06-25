
$(".owl-carousel").owlCarousel({
    items: 3,
    // itemsDesktop:[1199,3],
    // itemsDesktopSmall:[980,2],
    itemsMobile: [600, 1],
    navigation: true,
    autoPlay: true,
    loop: true
});

$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  })
  var coll = document.getElementsByClassName("collapsible");
var i;

$(function () {
  const i = document.getElementsByClassName('fa-solid');
  console.log(i);
  $(".btn-link").click(function () {
  $(i).classList.replace("fa-solid fa-plus", "fa-solid fa-minus");
  
  });
});






$( document ).ready(function() {
    
  var accordionParentClass = '.eachFaq';
  var accordionQuestionClass = '.eachFaq .title';
  var accordionContentClass = '.accordion-content';

  $(accordionParentClass).each(function() {
    $( this ).addClass('close');
    $( this ).find(accordionContentClass).hide();
  });
  
  $(accordionQuestionClass).click(function(){
    var faqClass = $(this).closest(accordionParentClass).attr('class');
  console.log(faqClass);
    
    if(faqClass.indexOf('close') != -1){
      //WHEN CLOSED
      $(accordionParentClass).find(accordionContentClass).slideUp('slow'); //CLOSE ALL
      $(accordionParentClass).addClass('close').removeClass('open'); //set all faq as closed
      
      $(this).closest(accordionParentClass).removeClass('close');
      $(this).closest(accordionParentClass).addClass('open');
      $( this ).closest(accordionParentClass).find(accordionContentClass).slideDown('slow');
      
    } else {
      $(this).closest(accordionParentClass).addClass('close');
      $(this).closest(accordionParentClass).removeClass('open');
      $( this ).closest(accordionParentClass).find(accordionContentClass).slideUp('slow');
    }
    
  });
  
});






