(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


//Do antigo Site Elementos

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


/*Modal video closed*/

 function showContent(tabId) {
            // Esconde todos os conteúdos
            document.querySelectorAll('.tabcontent').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove a classe active de todos os botões
            document.querySelectorAll('.custom-button').forEach(button => {
                button.classList.remove('active');
            });
            
            // Mostra o conteúdo selecionado
            document.getElementById(tabId).classList.add('active');
            
            // Adiciona a classe active ao botão clicado
            event.currentTarget.classList.add('active');
        }


          // Mantém a função original para desktop
// Função para desktop
    function showContent(contentId) {
        const contents = document.querySelectorAll('.tabcontent');
        contents.forEach(content => {
            content.classList.remove('active');
        });
        
        const buttons = document.querySelectorAll('.custom-button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        
        document.getElementById(contentId).classList.add('active');
        event.currentTarget.classList.add('active');
    }
    
    // Funções para mobile/tablet
    function showMobileContent(contentId) {
        // Esconde todos os cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.display = 'none';
        });
        
        // Mostra o conteúdo expandido
        document.getElementById('mobileExpandedContent').style.display = 'block';
        
        // Preenche o conteúdo correspondente
        const contentMap = {
            'gestaoDeProjetos': {
                title: 'Gestão de projetos',
                subtitle: 'Rumo à excelência na organização empresarial: Otimizando fluxos e desempenho',
                content: 'Transforme a maneira como sua empresa opera com nossos serviços especializados em Gestão de Processos. Nossa abordagem personalizada visa otimizar cada aspecto das operações, desde a análise até a implementação, garantindo eficiência e agilidade.'
            },
            'implantacaoERP': {
                title: 'Implantaçao ERP',
                subtitle: 'Automatizando a gestão empresarial: Inovação com ERP e soluções robóticas',
                content: 'Oferecemos serviços especializados para impulsionar seu negócio, combinando implantação de ERP e automação robótica. Transforme processos, ganhe agilidade e alcance novos patamares de eficiência com nossa expertise.'
            },
            'roboAnalise': {
                title: 'Robô, análise e implantação',
                subtitle: 'Soluções de automação para o futuro: Eficiência e redução de custos',
                content: 'Implemente robôs de última geração para transformar seus processos empresariais. Nossa equipe especializada oferece análise detalhada e implantação de soluções robóticas para aumentar a eficiência e reduzir custos.'
            }
        };
        
        const content = contentMap[contentId];
        const targetElement = document.getElementById(`mobile${contentId.charAt(0).toUpperCase() + contentId.slice(1)}`);
        
        targetElement.innerHTML = `
            <h2>${content.title}</h2>
            <h3>${content.subtitle}</h3>
            <p>${content.content}</p>
        `;
    }
    
    // Função para desktop
    function showDesktopContent(contentId) {
        // Esconde todos os conteúdos
        document.querySelectorAll('.desktop-tabcontent').forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove classe active de todos os botões
        document.querySelectorAll('.custom-button').forEach(button => {
            button.classList.remove('active');
        });
        
        // Mostra o conteúdo selecionado
        document.getElementById(contentId).classList.add('active');
        
        // Adiciona active ao botão clicado
        event.currentTarget.classList.add('active');
    }