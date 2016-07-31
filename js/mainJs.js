$(document).ready(function() {
    // for Owl Carousel sliders
    $('.main-item-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    });
    //cache a reference to the tabsd
    var tabs = $('.tabs li');

    //on click to tab, turn it on, and turn previously-on tab off
    tabs.click(function() { $(this).addClass('on').siblings('.on').removeClass('on'); });

    //auto-rotate every 5 seconds
    setInterval(function() {

        //get currently-on tab
        var onTab = tabs.filter('.on');

        //click either next tab, if exists, else first one
        var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
        nextTab.click();
    }, 5000);
});