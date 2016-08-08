$(document).ready(function() {

    // scroll navigation fixed
    //if ($(window).width() > '974') {
    //    $(window).scroll(function(){
    //        $('.header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    //    });
    //}

    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });
    //$(".mobile-menu a").on('click', function(){
    //    $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    //});
    //$(window).on('load', function(){
    //    $(".mobile-menu a + .sub-menu").siblings('a').toggleClass('expanded').attr("href", "#");
    //});

    // for Owl Carousel sliders
    $('.main-item-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    });
    //cache a reference to the tabsd


    $(window).on('load resize', function() {
        var tabsLi = $('.tabs li'),
            tabsListBoxLi = $('.box-tabs-list > li'),
            tabsMini = $('.tabs-mini'),
            box = $('.box');
        if ($(window).width() <= '640') {
            tabsMini.parent().removeClass('visible');
            tabsLi.removeClass('on');
            $(".box").attr('style', '');

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