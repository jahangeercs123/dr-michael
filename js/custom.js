$(document).ready(function() {
    $('.banner-inner').slick(
        {
            nextArrow: '<button class="my-arrow-class BannerbtnNext "><i class="fa fa-angle-right" ></i> </button>',
            prevArrow: '<button  class="my-arrow-class BannerbtnPrev"><i class="fa fa-angle-left" ></i></button>'
        }
    );
    $( ".icon-one" ).click(function(){
        $(this).toggleClass('active-one');
        $( ".nav-buttom nav ul" ).slideToggle();
        
    });
    const dd = document.querySelector('#dropdown-wrapper');
    const links = document.querySelectorAll('.dropdown-list a');
    const span = document.querySelector('#dropdown-wrapper');
    
    dd.addEventListener('click', function() {
      this.classList.toggle('is-active');
    });
    
    links.forEach((element) => {
      element.addEventListener('click', function(evt) {
        span.innerHTML = evt.currentTarget.textContent;
      })
    })
  })
