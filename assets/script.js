var date = moment().format("MMM Do YY");
$("#currentDay").append(date);

$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});    


  $("#9am").children("input").val(localStorage.getItem("9am"));

  $("#10am").children("input").val(localStorage.getItem("10am"));

  $("#11am").children("input").val(localStorage.getItem("11am"));

  $("#12pm").children("input").val(localStorage.getItem("12pm"));

  $("#1pm").children("input").val(localStorage.getItem("1pm"));

  $("#2pm").children("input").val(localStorage.getItem("2pm"));

  $("#3pm").children("input").val(localStorage.getItem("3pm"));

  $("#4pm").children("input").val(localStorage.getItem("4pm"));

  $("#5pm").children("input").val(localStorage.getItem("5pm"));

$('#9').attr('style', 'background-color: lightblue;')
$('#10').attr('style', 'background-color: lightcoral;')
$('#11').attr('style', 'background-color: lightcyan;')
$('#12').attr('style', 'background-color: lightgray;')
$('#13').attr('style', 'background-color: lightgreen;')
$('#14').attr('style', 'background-color: lightpink;')
$('#15').attr('style', 'background-color: lightsalmon;')
$('#16').attr('style', 'background-color: lightyellow;')
$('#17').attr('style', 'background-color: lightsteelbue;')

