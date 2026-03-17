$(document).ready(function(){

    // ----------------- Slider 1 -----------------
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Custom buttons
    $('.next').click(function(){
        $('.slider').slick('slickNext');
    });
    $('.prev').click(function(){
        $('.slider').slick('slickPrev');
    });

    // ----------------- Slider 2 (Public_disclosre) -----------------
    function setEqualHeight(){
        var maxHeight = 0;
        $('.Public_disclosre .slick-slide').css('height','auto');
        $('.Public_disclosre .slick-slide').each(function(){
            var h = $(this).outerHeight();
            if(h > maxHeight) maxHeight = h;
        });
        $('.Public_disclosre .slick-slide').height(maxHeight);
    }

    $('.Public_disclosre').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    }).on('setPosition', function(){
        setEqualHeight();
    });

    $(window).on('resize', function(){
        setEqualHeight();
    });

    // ----------------- Slider 3 (Mobile responsive) -----------------
    function mobileSlider(){
        var windowWidth = $(window).width();
        if(windowWidth < 991){
            var slidesToShow = (windowWidth < 576) ? 1 : 2;
            if(!$('.pic_box').hasClass('slick-initialized')){
                $('.pic_box').slick({
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                });
            } else {
                $('.pic_box').slick('slickSetOption', 'slidesToShow', slidesToShow, true);
            }
        } else {
            if($('.pic_box').hasClass('slick-initialized')){
                $('.pic_box').slick('unslick');
            }
        }
    }

    mobileSlider();
    $(window).on('resize', function(){
        mobileSlider();
    });

});