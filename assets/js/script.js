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

// time matching colors

var currentTime = moment().format('H');
console.log()

// make background color of / past hours gray / current hour red / future hours green
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
      // Compares row id to current hour and sets color accordingly
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

// *button function


// A function you call whenever the menu button is clicked



// *saving to local storage

