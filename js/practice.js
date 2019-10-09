$(document).ready(function () {
 $('button').on('click', function () {
  $('#button').css('background', 'blue').css('color','red');
  let user = $('#user').val();
  let password = $('#pass').val();
  isUserNotEmpty(user);
  isPasswordNotEmpty(password);
 })
})

function error(e) {
 $(e).css('border', '5px solid red');
 $('.alert-danger').fadeIn(3000);
}
function success(u) {
 $(u).css('border', '5px solid green');
 $('.alert-success').fadeIn(3000);
}

function isUserNotEmpty(user) {
 if (user == "" || user.length <=3) {
  error('#user');
 } else {
  success('#user');
 }
}

function isPasswordNotEmpty(password) {
 if (password == "" || password.length <=3) {
  error('#pass');
 } else {
  success('#pass');
 }
}



