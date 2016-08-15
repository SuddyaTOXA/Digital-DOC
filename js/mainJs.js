$(document).ready(function() {

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });

    // for Owl Carousel sliders
    $('.main-item-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    });
    //cache a reference to the tabs

    $(window).load(function() {
        var carProd = $('#carousel-one-product'),
            countLi = carProd.find('img').length;
        if ( countLi > 1 ) {
            setInterval(function() {
              var widthViewport = (124*countLi)-10,
                  viewPort = carProd.find('.flex-viewport');
                  viewPort.css({'width': widthViewport + 'px'});
            },100)
        } else {
            carProd.css({'display': 'none'});
        };
    })


    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            slideshow: false,
            itemWidth: 135,
            itemMargin: 20,
            minItems: 2,
            maxItems: 4,
            move: 1,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            slideshow: false,
            sync: "#carousel"
        });

        $('#carousel-video').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            slideshow: false,
            itemWidth: 200,
            itemMargin: 20,
            minItems: 2,
            maxItems: 3,
            move: 1,
            asNavFor: '#slider-video'
        });

        $('#slider-video').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            directionNav: false,
            slideshow: false,
            before: function(){
                $('.my-video').videoController('pause');
            },
            sync: "#carousel-video"
        });

        $('#carousel-one-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            directionNav: false,
            slideshow: false,
            itemWidth: 110,
            itemMargin: 10,
            minItems: 2,
            asNavFor: '#slider-one-product'
        });

        $('#slider-one-product').flexslider({
            animation: "slide",
            controlNav: true,
            animationLoop: true,
            directionNav: false,
            slideshow: false,
            sync: "#carousel-one-product"
        });
    });


    // uploading Youtube iframes
    $('.slider-video-wrap .youtube-wrap').click(function(){
        var videoBox =  $(this).parent('.slider-video-wrap'),
            id = videoBox.data('youtube-id');

        videoBox.html('<iframe class="my-video" src="http://www.youtube.com/embed/' + id + '?autoplay=1&enablejsapi=1" frameborder="0" allowfullscreen></iframe>');
        videoBox.children('.my-video').videoController();
    });


    $(window).on('load resize', function() {
        var tabsLi = $('.tabs').children('li'),
            tabsListBoxLi = $('.box-tabs-list').children('li'),
            tabsMini = $('.tabs-mini'),
            box = $('.box');

        if ($(window).width() <= '640') {
            tabsMini.parent().removeClass('visible');
            tabsLi.removeClass('on');
            $(".box").attr('style', '');

            tabsMini.unbind('click');
            tabsMini.click(function() {
                $(this).next().toggle('500');
            });

        } if ($(window).width() > '640') {
            tabsListBoxLi.removeClass('visible');
            tabsLi.removeClass('on');

            tabsMini.next().attr('style', '');

            tabsLi.first('li').addClass('on');
            tabsListBoxLi.first('li').addClass('visible');

            var maxHeight = 0;
                box.each(function(){
                    if ( $(this).height() > maxHeight )
                    {
                        maxHeight = $(this).height();
                    }
                });
            box.height(maxHeight);

            tabsLi.click(function() {
                var liId = $(this).index();
                $(this).addClass('on').siblings('.on').removeClass('on');
                tabsListBoxLi.eq(liId).addClass('visible').siblings('.visible').removeClass('visible');
            });

            setInterval(function() {
                //get currently-on tab
                var onTab = tabsLi.filter('.on');
                var onBox = tabsListBoxLi.filter('.visible');
                //click either next tab, if exists, else first one
                var nextTab = onTab.index() < tabsLi.length-1 ? onTab.next() : tabsLi.first();
                nextTab.click();
                var nextBox = onBox.index() < tabsListBoxLi.length-1 ? onBox.next() : tabsListBoxLi.first();
                nextBox.click();
            }, 8000);

        }
    });

});