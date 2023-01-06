// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let now = dayjs();
console.log(now.format());
let savedEvents = new Array(9);
console.log("saved array entries:", savedEvents)

const timeBlock = document.querySelector("hour");

console.log(timeBlock);

$(function () {
//updateTimeandDate();
//displayTasks();
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

//save button function
$("button").click(function() { 
  let textEntry = $(this).siblings("#textEntry").val();
  console.log(textEntry);
  let entryTime = $(this).closest("div").attr("id");
  console.log(entryTime);
  // create object with keys of saved items
  let savedEntry = {
    time: parseInt(entryTime),
    entry: textEntry
  }
console.log(savedEntry)
  //create array index location number.
  let arrayIndex = savedEntry.time - 9;
  //write saved objects into array 
  savedEvents.splice(arrayIndex, 1, savedEntry);
  localStorage.setItem("savedEvents", JSON.stringify(savedEvents))

}
)

const displayColorUpdate = () => {
  //format current time to hour and save as current time
  var currentTime = parseInt(now.format("H"));
  console.log("current time: " + currentTime)
  for (i = 9; i <= 17; i++) {
    if (i === currentTime){
      $("#" + i).css("background-color", "#8ccceb")
      console.log("current")
    } else if (i > currentTime){
      $("#" + i).css("background-color", "#a2f2a6")
      console.log("future")
    } else {
      $("#" + i).css("background-color", "#abbfc9")
      console.log("past")
    } 
    console.log("jquery target: " + "#" + i);
  } 
}

displayColorUpdate();



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
