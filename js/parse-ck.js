Parse.initialize("MN7LCkD6vizVeH3SsHhch2fRcHB838sOUImbFPr1","xcRpMIvM6PPjbmz0PILmn6ewIztycBXulZZm2SpS");$.fn.createAndSaveContact=function(){var e=Parse.Object.extend("ContactObject"),t=new e;return t.save({name:$("#name").val(),email:$("#email").val(),message:$("#message").val()},{success:function(e){return!0}})};$(window).ready(function(){$("form").submit(function(e){e.stopPropagation();$("#contact-submit").attr("disabled",!0).addClass("disabled");happy_span='<span id="result-msg">Thanks for the message, we will get back to you as soon as possible.</span>';sad_span='<span id="result-msg">Oh no, an error!</span>';$().createAndSaveContact()?$("form").find("legend").after(happy_span):$("form").find("legend").after(sad_span)&&$("#contact-submit").attr("disabled",!1).removeClass("disabled");$("#result-msg").hide().fadeIn();setTimeout(function(){$("#result-msg").fadeOut()},5e3);return!1})});