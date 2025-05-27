function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_black_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_black_36dp.svg";
    }
}

//Slide

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.carousel-btn');
    const slides = document.querySelectorAll('.carousel-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const slideIndex = this.getAttribute('data-slide');
            changeSlide(slideIndex);
        });

        button.addEventListener('mouseover', function () {
            const slideIndex = this.getAttribute('data-slide');
            changeSlide(slideIndex);
        });
    });

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i == index) {
                slide.classList.add('active');
            }
        });
    }

    changeSlide(0);
});
//slide

//slide info

function showContent(contentId) {
    var tabContents = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    showContent('gestaoDeProjetos');
});



//slide parceiros
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.carousel-btn--parceiros');
    const slides = document.querySelectorAll('.carousel-item--parceiros');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const slideIndex = this.getAttribute('data-slide--parceiros');
            changeSlide(slideIndex);
        });

        button.addEventListener('mouseover', function () {
            const slideIndex = this.getAttribute('data-slide--parceiros');
            changeSlide(slideIndex);
        });
    });

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i == index) {
                slide.classList.add('active');
            }
        });
    }

    changeSlide(0);
});

/*Chat Online Bitrix*/

(function(w,d,u){
    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn.bitrix24.com.br/b26316865/crm/site_button/loader_5_zoyukn.js');


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}