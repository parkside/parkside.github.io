Parse.initialize("", "");

$.fn.createAndSaveContact = function() {
  var ContactObject = Parse.Object.extend("ContactObject");
  var contactObject = new ContactObject();

  return contactObject.save({ 
    name: $('#name').val(), 
    email: $('#email').val(),
    subject: $('#subject').val(),
    message: $('#message').val() }, {
    success: function(object) {
      return true;
    }
  });
}

$(window).ready(function() {
  $('form.contact').submit(function(e) {
    e.stopPropagation();
    $('#contact-submit').attr('disabled', true).addClass('disabled');

    happy_span = '<span id="result-msg">Thanks for saying hi! We\'ll get back to you as soon as possible.</span><br><br>';
    sad_span = '<span id="result-msg">Sorry about that, something went wrong.</span><br><br>';

    if($().createAndSaveContact()) {
      $('form.contact').prepend(happy_span);
    } else { $('form.contact').prepend(sad_span) && $('#contact-submit').attr('disabled', false).removeClass('disabled'); }

    $('#result-msg').hide().fadeIn();

    return false;
  })
});