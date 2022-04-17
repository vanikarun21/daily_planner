// header date - using moment.js (https://momentjs.com/docs/#/displaying/)

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do h A');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();

var timeContainer = $(".container")
//  create a for loop to list 8 hrs 
for (var i = 0; i < 9; i++) {

    let time = ""
    if (i === 0) {
        time = "9 am"
    } else if (i === 1) {
        time = "10 am"

    } else if (i === 2) {
        time = "11 am"

    } else if (i === 3) {
        time = "12 pm"

    } else if (i === 4) {
        time = "1 pm"

    } else if (i === 5) {
        time = "2 pm"

    } else if (i === 6) {
        time = "3 pm"

    } else if (i === 7) {
        time = "4 pm"

    } else if (i === 8) {
        time = "5 pm"

    }
    let hourBlock = $("<div class = 'row'></div>")
    //  create a var for p html element - $ blue color - template literal
    let num = $(`<p id="mainRow" class = 'hour col-2 justify content left'>${time}</p>`)
    // create a var for textarea html element
    let txtArea = $("<textarea class = 'text col-8 d-flex justify content center'></textarea>")
    // create a var for button 
    let btn = $("<button class = 'saveBtn col-2'></button>")
    // create a variable and then if statement i = 0, then 
    let hourRow = $(`<div class = 'row'><p id="mainRow" class = 'hour col-2 justify content left'>${time}</p><textarea class = 'text col-8 d-flex justify content center'></textarea><button class = 'saveBtn col-2'></button></div>`)
    // no jquery equivalent for the below so leave them as it is 
    // hourBlock.append(num,txtArea,btn)
    // timeContainer.append(hourBlock)
    timeContainer.append(hourRow)

};

var data = 
$("<textarea>").addClass("past");



// write code that alllows you to change the color of the text area based on the time of the day WE want the color changed to grey, red and green - double check your code real time 
// let presentHour = moment().format('hA');
// let data =  $("<textarea class = 'text col-8 d-flex justify content center'></textarea>");
// let presentHour = moment().format('h a');
//     console.log(presentHour);

//     // $("#mainRow").css({"background-color": "yellow"});

//     // $("textarea").addClass("past"); this is just an identifier, this does not have the html tag , refer to line 59

//     if ($('#mainRow').text() == presentHour) {
//         $("textarea").css({"background-color": "yellow"});

//     } 


//   $("button").click(function(){
        
//         $("div").addClass("present");
//       });


//  getting the values in the text area stored within local storage

// cosnt input = document.querySelector("input"),
//   h2 = document.querySelector("h2");

//   input.addEventListener("keyup", display);

//   function display(){
//       Headers.innerHTML = input.value;
//   }

//   localStorage.setItem('keyName', input.value);


  
// cosnt input = document.querySelector("input"),
// h2 = document.querySelector("h2");

// input.addEventListener("keyup", display);

// function display(){
//     localStorage.setItem('value', input.value);
//     h2 = localStorage.getItem("value")
    
// }
// write code to align the text you input pertains to the hour you added it to
//  make sure the info we are storing in local storage is not detroying the old information