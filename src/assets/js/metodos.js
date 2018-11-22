

$("#inicio_qs").on("click", function() {  alert("dededede");
  $("#app")
    .load("./Login.html")
    .show();
});

$("#inicio_qs")
  .load("./Home.html")
  .show();

$(document).ready(function(){
  $("p").click(function() {
    alert($(this).attr("id"))
  });
});
