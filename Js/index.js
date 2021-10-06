// Start Aos Animation

AOS.init();
AOS.init({once: true}); /* To make animation one time only */

/* To Stop Animation at mobiles */
AOS.init({
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
}); 


// start sticky navbar

let bodyScroll = document.querySelector("html , body"),

    stickyNav = document.querySelector("nav");

window.addEventListener("scroll" , function(){

    // console.log(bodyScroll.scrollTop);

    if(bodyScroll.scrollTop > 200) {

        stickyNav.style.backgroundColor = "white";

    }else{

        stickyNav.style.backgroundColor = "transparent";
    }
});

// End Sticky Navbar



// Start Auto Type 

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 100) || 4000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 1000;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid var(--main-color) }";
    document.body.appendChild(css);
  };

//   End Auto Type

// Start navlink click





// Start scroll Down

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
      return false;
    });
  });


// End scroll Down

// Start My Work

$( function() {
  var $grid = $('.grid').isotope({
    itemSelector: 'article'
  });

  // filter buttons
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}

$(window).bind("load", function() {
  $('#all').click();
});


// End My Work


///// start scroll up/////////////////

$(function () {

  var scrollButton = $("#scroll-up");

  $(window).scroll(function()

   {
      $(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function()
    {	   
  $("html,body").animate({scrollTop : 0}, 500);
    });
  });


  ///// end scroll up/////////////////