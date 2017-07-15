$(function() {

  //More portfolio images
  $('body').on("click", '#show_more_id', function(event){
    event.preventDefault();
    if ($(".items_grid").hasClass("is_showing")) {
      $(".items_grid").removeClass("is_showing");
      $(this).html("Show more");
    } else {
     $(".items_grid").addClass("is_showing");
    $(this).html("Show Less");
  }
});             

// Portfolio Filter
var $grid = $('.grid').isotope({
  itemSelector: '.grid_item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filter_controls').on( 'click', '.control', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change active class on buttons
$('.filter_controls').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.control', function() {
    $buttonGroup.find('.active_control').removeClass('active_control');
    $( this ).addClass('active_control');
  });
});


  //Открывающиеся меню при адаптиве
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main_menu").slideToggle();
    return false;
  });

  //Submenu open/close
  $(document).mouseup(function (e){ 
    var div = $('.submenu');
    var wrap = $('.submenu_wrap');
    if (!wrap.is(e.target)
      && wrap.has(e.target).length === 0) { 
      div.hide(); 
    $(wrap).removeClass("active_wrap")
  } else {
    $(".submenu").slideToggle();
    $(wrap).addClass("active_wrap")
  }
});

  //Скролл до блока
  $('.menu_wrap .anchor_link').mPageScroll2id({ 
    scrollSpeed: 400,
    offset: 150
  });

  // Popup item
  $('.popup_item').magnificPopup();

  //Slider
  $(".slider_wrap").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    dots: true,
    autoHeight: true,
    responsive : {
      0 : {
        items: 1
      }
    },
    navText: ""
  });

});
