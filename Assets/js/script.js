let now = dayjs();
let savedEvents = new Array(9);
let formattedDisplayDate = dayjs().format("dddd, MMMM D, YYYY", )

const timeBlock = document.querySelector("hour");

//call functions once page has loaded
$(document).ready(function () {
  updateRegularly();
  displaySavedSchedule();
});



//display date and time at top of page
let displayDateHeader = () => {
  $("#currentDay").text(formattedDisplayDate);
}

//save button function
$("button").click(function() { 
  let textEntry = $(this).siblings(".textArea").val();
  let entryTime = $(this).siblings(".textArea").attr("id");
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

//----load and display stored schedule functions----
const loadSchedule = () => {
  var savedSchedule = localStorage.getItem("savedEvents")
  if (savedSchedule) {
    savedEvents = JSON.parse(savedSchedule);
  }
  console.log("saved schedule content: ", savedSchedule)
}
const displaySavedSchedule = () => {
  loadSchedule();
  for (i = 0; i < 9; i++) {
    let hourlyEntry = savedEvents[i];
    let entryBox = $('#' + (i + 9));
    if (hourlyEntry) {
      var j = hourlyEntry.entry;
      entryBox.val(j)
    }

    console.log('entry box: ', entryBox)
  }
}
let updateRegularly = () => {
  displayColorUpdate();
  displayDateHeader();
}
setInterval(updateRegularly(), 1000)