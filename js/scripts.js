$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
$(".card").hover(function () {
  $(this).children(".portfolio").fadeToggle(1200, "linear");
});
$("button").click(function (e) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message. ' + ' Thank you for the feedback.');
  e.preventDefault();
});

$("#form").submit(function(e){
e.preventDefault();
var name = $("input#name").val();
console.log(name);
});

$("#form").submit(function(e){
  e.preventDefault();
  var email = $("input#email").val();
  console.log(email);
  });

  $("#form").submit(function(e){
    e.preventDefault();
    var message = $("textarea#message").val();
    console.log(message);
    });
    $('input#name').css('color', 'white');
$('input#email').css('color', 'white');
$('textarea#message').css('color', 'white');
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
