


$(document).ready(function() {
  $("button#submit").click(function(event) {
    var continent = $("#continent").val();
    var happy = $("input:radio[name=happy]:checked").val();
    var color = $("#color").val();
    var final = "results. You are from " + continent + ". You are " + happy + "happy with your continent, and the color of your continent is:" + color;

    alert(final);
    event.preventDefault()
  })
});
