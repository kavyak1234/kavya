jQuery(function($) {
    $('.online-shopping .owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:true,items:4,
        navText: ['<span class="icon-arrow-left-2"></span>','<span class="icon-arrow-left-2"></span>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            575:{
                items:2,
                nav:false
            },
            991:{
                items:4,
            }
        }
    })
    $(".shopnow-block-left .yith-ajaxsearchform-container").addClass("search");
    $(".menu-icon").click(function() { 
        // assumes element with id='button'
        // $(".sidebar-block").toggle();
        $('body').toggleClass("menu-active")
    });

    $(".close").click(function() { 
        // assumes element with id='button'
        // $(".sidebar-block").toggle();
        $('body').toggleClass("menu-active")
    });
    $('header .owl-carousel').owlCarousel({
        loop:true,
        nav:false,items:1,autoplay:true ,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
    });
   /* $('body').click(function () {
            $('.mobile-menu ul.menu-list').css("left", "-350px");
        });
        $('.mobile-menu ul.menu-list').click(function (event) {
            event.stopPropagation();
        });
    $('body').click(function () {
            $('.mobile-menu ul.menu-list').css("left", "-350px");
        });
        $('.mobile-menu ul.menu-list, .menu-icon, .menu-close').click(function (event) {
            event.stopPropagation();
        });
    $('body').click(function () {
            $('.menu-active .mobile-menu ul.menu-list').removeClass(".menu-active");
        });
        $('.menu-active .mobile-menu ul.menu-list, .menu-icon, .menu-close').click(function (event) {
            event.stopPropagation();
        });
        $('body').click(function () {
            $('body').removeClass("menu-active");
        });
        $('body, .menu-icon, .menu-close').click(function (event) {
            event.stopPropagation();
        });*/

        $('body').click(function () {
            $('body').removeClass("menu-active");          
        });          
        /*$('.menu-active .mobile-menu ul.menu-list, .menu-icon, .menu-close').click(function (event) {              
            event.stopPropagation();          
        });*/
        $('.menu-active .mobile-menu ul.menu-list, .mobile-menu ul > li.menu__serach , .menu-icon, .menu-close').click(function (event) {              
            event.stopPropagation();          
        });
});
