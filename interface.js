$('#fetch-profile').click(function(event){
  event.preventDefault();
  var username = $('#username').val()
  var html = $('#profileTemplate').html()
  var template = Handlebars.compile(html)
  var profile = 'https://api.github.com/users/' + username +'?client_id=?270ae81c14074e2c3045&client_secret=2ec458a20ed0a813fd47436f859b1fc5e260d78e';
  $.get(profile, function(user){
  console.log(user);
  console.log(template(user));
  $('#profile').append(template(user));
  });

});
