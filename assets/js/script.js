// calling targets:
// 1. currentDate
// 2. colorcode
// 3. button
//--------------------------

// *Current date

var timeDisplayEl = document.querySelector('#currentDate');
var currentDate = document.querySelector('answer');

setInterval(function() {
    timeDisplayEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
},1000);

// *Colorcode

var currentTime = moment().format('H');
console.log()

// make background color of past, current and future hours:
const rows = document.getElementsByClassName("colorcode");
var currentHour = parseInt(moment().format('H'));


Array.from(rows).forEach(row => {
    var
    rowIdString = row.id,
    rowHour;
    if (rowIdString) {
    rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly:
        if (currentHour === rowHour) {
        setColor(row, "#ca231a"); //present-red
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 12)) {
        setColor(row, "#471b81"); //future-purple
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 12)) {
        setColor(row, "#94a736"); //past-yellow brown
        } else {
        setColor(row, "#3e4647"); //Default
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// *Local storage

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".type").val();
        var time = $(this).parent().attr("id");
        
        // Save text in local storage
        localStorage.setItem(time, text);
    })
});

  // save in local storage
localStorage.setItem(timeKey, textValue);
// Get item from local storage if any
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));
$('#hour17 .description').val(localStorage.getItem('hour18'));
$('#hour17 .description').val(localStorage.getItem('hour19'));
$('#hour17 .description').val(localStorage.getItem('hour20'));