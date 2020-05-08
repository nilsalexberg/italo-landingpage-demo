$(document).ready(function(){
  $('.masterclass-carousel').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      768: {
        items: 4
      }
    }
  });
})
