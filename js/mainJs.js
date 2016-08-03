$(document).ready(function() {

    // scroll navigation fixed
    //if ($(window).width() > '974') {
    //    $(window).scroll(function(){
    //        $('.header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    //    });
    //}

    // for burger menu
    $(".mobile-menu-toggle, .mobile-menu-overlay").on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });
    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });
    $(window).on('load', function(){
        $(".mobile-menu a + .sub-menu").siblings('a').toggleClass('expanded').attr("href", "#");
    });

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
            tabsMini = $('.tabs-mini');

        if ($(window).width() <= '640') {
            tabsMini.parent().removeClass('visible');
            tabsLi.removeClass('on');

            tabsMini.click(function() {
                if ($(this).parent().hasClass('visible')){
                    $(this).parent().removeClass('visible');
                } else {
                    $(this).parent().addClass('visible').siblings('.visible').removeClass('visible');
                }
            });

        } if ($(window).width() > '640') {
            tabsListBoxLi.removeClass('visible');
            tabsLi.removeClass('on');
            tabsLi.first('li').addClass('on');
            tabsListBoxLi.first('li').addClass('visible');

            tabsLi.click(function() {
                var liId = $(this).index();
                $(this).addClass('on').siblings('.on').removeClass('on');
                tabsListBoxLi.eq(liId).addClass('visible').siblings('.visible').removeClass('visible');
            });

            //setInterval(function() {
            //
            //    //get currently-on tab
            //    var onTab = tabs.filter('.on');
            //    var onBox = tabsListBox.filter('.visible');
            //    //click either next tab, if exists, else first one
            //    var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
            //    nextTab.click();
            //    var nextBox = onBox.index() < tabsListBox.length-1 ? onBox.next() : tabsListBox.first();
            //    nextBox.click();
            //}, 7000);
        }
    });

});