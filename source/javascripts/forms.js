function enableParentFieldset(element) {
  $(element).parents('fieldset').find('input, select').not(element).removeAttr('disabled');
}
function disableParentFieldset(element) {
  $(element).parents('fieldset').find('input, select').not(element).attr('disabled', 'disabled');
}

$(document).ready(function() {
  // Publication Settings
  $('.publication-settings #saveTypes a').click(function() {
    $('#saveButton').text( $(this).text() );

    duration = 150;  // seconds
    if ( $(this).is('.publish-later') ) {
      $('.publication-settings .publish-date').slideDown(duration);
    } else {
      $('.publication-settings .publish-date').slideUp(duration);
    }
  });

  // Menu Settings
  $('.menu-settings #menuAddLink').change(function() {
    if ( $(this).is(':checked') ) {
      enableParentFieldset(this);
    } else {
      disableParentFieldset(this);
    }
  });

  // URL Settings
  $('.url-settings #urlGenerate').change(function() {
    if ( $(this).is(':checked') ) {
      disableParentFieldset(this);
    } else {
      enableParentFieldset(this);
    }
  });

  // Parent Blog Settings
  $('#parentBlog').change(function() {
    if ( $(this).find('option:selected').is('.add-new') ) {
      $(this).parents('fieldset').find('.new-blog').show();
    } else {
      $(this).parents('fieldset').find('.new-blog').hide();
    }
  });

  // FAQ Short/Long Answers
  $('#sameAnswer').change(function() {
    $detailedAnswer = $('#detailedAnswer');

    if ( $(this).is(':checked') ) {
      // Store the existing text temporarily
      $detailedAnswer.data('temp-answer', $detailedAnswer.val());

      // Replace with the short answer and disable
      $detailedAnswer.attr('disabled', 'disabled').val( $('#shortAnswer').val() );
    } else {
      // Restore any temporary text
      $detailedAnswer.val( $detailedAnswer.data('temp-answer') );

      // Enable the input
      $detailedAnswer.removeAttr('disabled');
    }
  });

  // Example button rendering
  $('#dealButton').on('input paste keydown', function() {
    if ( $(this).val() == '') {
      $('#exampleButton').html( $('#dealButton').attr('placeholder') );
    } else {
      $('#exampleButton').html( $(this).val() );
    }
  });
});
