// Load is used to ensure all images have been loaded, impossible with document

var container = jQuery( '#thumbs' );
container.imagesLoaded( function() {



    // Takes the gutter width from the bottom margin of .thumb

  var gutter = parseInt( jQuery( '.thumb' ).css( 'marginBottom' ) );


  container.removeClass("hide");
  jQuery('#loading').addClass("hide");

  // Creates an instance of Masonry on #thumbs

  container.masonry({
    gutter: 10,
    itemSelector: '.thumb',
    columnWidth: '.thumb'
  });
  
  
  $( ".thumb" ).hover(
    function() {
      $(this).find("h4").removeClass("hide");
    }, function() {
      $(this).find("h4").addClass("hide");
    }
);

  // This code fires every time a user resizes the screen and only affects .thumb elements
  // whose parent class is .container-fluid. Triggers resize so nothing looks weird.
  
  jQuery( window ).bind( 'resize', function(){
    if ( jQuery( '#thumbs' ).parent().hasClass( 'container-fluid' ) ) {
      
      
      
      // Resets all widths to 'auto' to sterilize calculations
      
      post_width = jQuery( '.thumb' ).width() + gutter;
      jQuery( '.container-fluid #thumbs, body > .container-fluid' ).css( 'width', 'auto');
      
      
      
      // Calculates how many .thumb elements will actually fit per row. Could this code be cleaner?
      
      posts_per_row = jQuery( '#thumbs' ).innerWidth() / post_width;
      floor_posts_width = ( Math.floor( posts_per_row ) * post_width ) - gutter;
      ceil_posts_width = ( Math.ceil( posts_per_row ) * post_width ) - gutter;
      posts_width = ( ceil_posts_width > jQuery( '#thumbs' ).innerWidth() ) ? floor_posts_width : ceil_posts_width;
      if ( posts_width == jQuery( '.thumb' ).width() ) posts_width = '100%';
      
      
      
      // Ensures that all top-level .container-fluid elements have equal width and stay centered
      
      jQuery( '.container-fluid #thumbs, body > .container-fluid' ).css( 'width', posts_width );
      jQuery( 'body > .container-fluid' ).css({ 'margin': '0 auto' });
    
    
    
    }
  }).trigger( 'resize' );
  


});