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
    var tabsListBox = $('.box-tabs-list > li');
    //on click to tab, turn it on, and turn previously-on tab off
    tabs.click(function() {
        var liId = $(this).index();
        $(this).addClass('on').siblings('.on').removeClass('on');
        tabsListBox.eq(liId).addClass('visible').siblings('.visible').removeClass('visible');
    });

    //auto-rotate every 5 seconds
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
    //
});