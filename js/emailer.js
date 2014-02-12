$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("03aUjJu9Fz7GmmE4QZDNnAwmUZA8VxeZe3Jf1J7Z", "Pl2oGJ3BjWx3J0fcwsH6ztSLqY4mxtb9tF04c6Dv");

  // Setup the form to watch for the submit event
  $('form.contact').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    }

    happy_p = '<p id="result-msg">Thanks for getting in touch. <br> We\'ll get back to you as soon as possible.</p><br><br>';
    sad_p = '<p id="result-msg">Sorry about that, something went wrong.</p><br><br>';

    // Run our Parse Cloud Code and
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('form.contact').prepend(happy_p);
      },

      error: function(object, error) {
        console.log(error);
        $('form.contact').prepend(sad_p);
        $('form.contact').attr('disabled', false).removeClass('disabled');
      }
    });

    return false;
  });

});
