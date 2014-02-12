$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("03aUjJu9Fz7GmmE4QZDNnAwmUZA8VxeZe3Jf1J7Z", "Pl2oGJ3BjWx3J0fcwsH6ztSLqY4mxtb9tF04c6Dv");

  // Setup the form to watch for the submit event
  $('#contact-submit').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    }
    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});
