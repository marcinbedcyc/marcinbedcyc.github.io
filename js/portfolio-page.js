(function($) {
  "use strict"; // Start of use strict

  // No JS

})(jQuery); // End of use strict

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Typed text in masthead
let typedElement = document.body.querySelector('.typed')
let typedText = typedElement.getAttribute('data-text')
let test = new Typed('.typed', {
    strings: [typedText],
    typeSpeed: 150,
    loop: true,
    backSpeed: 50,
    backDelay: 5000
});



// Back to top button
let backToTopElement = document.body.querySelector('.back-to-top')
if (backToTopElement) {
  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTopElement.classList.add('active')
    } else {
      backToTopElement.classList.remove('active')
    }
  }
  window.addEventListener('scroll', toggleBackToTop)
}

// Pass image src to Image Modal Preview
$(function() {
  $('.pop').on('click', function() {

    images = $(this).attr('images').split(' ');

    $('#carouselInner').empty();
    for (const index in images) {
      $('#carouselInner').append(`
        <div class="carousel-item ${index == 0 ? 'active' : ''}">
          <img src="${images[index]}" class="img-fluid img-shrink">
        </div>
      `);
    }

    $('#carouselIndicators').empty();
    for (const index in images) {
      $('#carouselIndicators').append(`
        <button type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide-to="${index}" aria-label="Slide ${index}"
        ${index == 0 ? 'class="active" aria-current="true"' : 'class=""'}></button>
      `);
    }

    $('#imagePreviewModal').modal('show');
  });
});

$(document).keydown(function(e) {
  if ($("#imagePreviewModal").hasClass('show')) {
    // Left arrow
    if (e.keyCode === 37) {
      $(".carousel-control-prev").click();
      return false;
   }
   // Right arrow
   if (e.keyCode === 39) {
      $(".carousel-control-next").click();
      return false;
   }
  }
});
