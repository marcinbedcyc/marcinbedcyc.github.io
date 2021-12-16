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

// var myOffcanvas = document.getElementById('navbarResponsive')
// var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
// // const y = element.getBoundingClientRect().top + window.scrollY;
// // console.log(y)

// const offcanvasDismiss =  () => {
//   bsOffcanvas.hide()
// }

// function checkScrollEnd() {
//   if (window.scrollY != scrollY) {
//     window.requestAnimationFrame(checkScrollEnd);
//     console.log(window.scrollY)
//   }
//   else {
//     console.log('scrolled ends')
//     bsOffcanvas.hide()
//   }
//   scrollY = window.scrollY
// }

// var navLinksList = document.getElementsByClassName('nav-link')
// for (let navLink of navLinksList){
//   console.log(navLink)
//   navLink.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     // e.preventDefault()
//     // bsOffcanvas.hide()
//     scrollY = window.scrollY
//     window.requestAnimationFrame(checkScrollEnd)
//     // if (navLink.offsetHeight + navLink.scrollTop >= navLink.scrollHeight) {  
//     //   console.log('scrolled to bottom')  
//     // } 
//   })
//   // navLink.onclick = offcanvasDismiss
// }

// Pass image src to Image Modal Preview
$(function() {
  $('.pop').on('click', function() {
    $('.image-preview').attr('src', $(this).attr('src'));
    $('#imagePreviewModal').modal('show');   
  });		
});
