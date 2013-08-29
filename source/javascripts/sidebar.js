$(document).ready(function() {
  sidebarID = $('body').data('sidebar-id');

  // Mark the current page as active in the sidebar (if found)_list.html"
  $('.sidebar-nav .nav-list li#sidebar_' + sidebarID)
    .addClass('active')
    .parents('.nav-list').addClass('active');

  $('.sidebar-nav .nav-header a').click(function() {
    $list = $(this).parents('.nav-list');
    duration = 150;  // seconds

    if ( $list.is('.active') ) {
      $list.find('li').not('.nav-header, .divider').slideUp(duration);
      $list.removeClass('active');
    } else {
      $('.sidebar-nav .nav-list.active').find('li').not('.nav-header, .divider').slideUp(duration);

      // Hack to prevent the "active" link inside the list from showing up
      // with deformed margins; keep track of it and add 'active' back after animation
      $active_link = $list.find('li.active');
      console.log($active_link);
      if ($active_link.length > 0) { $active_link.removeClass('active'); }

      $list.find('li').not('.nav-header, .divider').slideDown(duration, function() {
        // Now add the active link back (if necessary)
        if ($active_link.length > 0) { $active_link.addClass('active'); }
      });

      $('.sidebar-nav .nav-list').removeClass('active');
      $list.addClass('active');
    }

  });

});
