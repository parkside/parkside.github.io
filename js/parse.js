Parse.initialize("03aUjJu9Fz7GmmE4QZDNnAwmUZA8VxeZe3Jf1J7Z", "Pl2oGJ3BjWx3J0fcwsH6ztSLqY4mxtb9tF04c6Dv");

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

    happy_p = '<p id="result-msg">Thanks for getting in touch. <br> We\'ll get back to you as soon as possible.</p><br><br>';
    sad_p = '<p id="result-msg">Sorry about that, something went wrong.</p><br><br>';

    if($().createAndSaveContact()) {
      $('form.contact').prepend(happy_p);
    } else { 
      $('form.contact').prepend(sad_p) && $('#contact-submit').attr('disabled', false).removeClass('disabled');
    }

    $('#result-msg').hide().fadeIn();

    return false;
  })
});