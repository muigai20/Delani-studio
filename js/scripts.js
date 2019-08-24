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
