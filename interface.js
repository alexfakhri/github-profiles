$('#fetch-profile').click(function(event){
  event.preventDefault();
  var profile = 'https://api.github.com/users/alexfakhri?client_id=?270ae81c14074e2c3045&client_secret=2ec458a20ed0a813fd47436f859b1fc5e260d78e';
  $.get(profile, function(user){
  console.log(user);
  });

});
