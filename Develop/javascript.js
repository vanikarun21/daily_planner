
// header date - using moment.js (https://momentjs.com/docs/#/displaying/)
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();

// timeblocks from 9am to 5pm 

// // reference to html , create a variable equal to html elements 
// var timeContainer = document.querySelector(".container")

// // create another variable equal to a string value of whatever you want it tobe  / adding tasks

// var test = "morning"

// // append the string variable to html reference variable 

// timeContainer.append(test)

var timeContainer = document.querySelector(".container")

//  create a for loop to list 8 hrs 
for (var i = 0 ; i < 9 ; i++) {
    let hourBlock = document.createElement("div")
    //  create a var for p html element
    // create a var for textarea html element
    // create a var for button 
    // create a variable and then if statement i = 0, then 
    let time = "" 
    if (i === 0 ){
        time = "9 am"
    } else if ( i === 1 ){
        time = "10 am"

    } else if ( i === 2 ){
        time = "11 am"

    } else if ( i === 3 ){
        time = "12 pm"

    } else if ( i === 4 ){
        time = "1 pm"

    } else if ( i === 5 ){
        time = "2 pm"

    } else if ( i === 6 ){
        time = "3 pm"

    } else if ( i === 7 ){
        time = "4 pm"

    } else if ( i === 8 ){
        time = "5 pm"

    }
    hourBlock.textContent = time
    // append p,textarea and button appended to hourblock ; then change hourBlock to new p variable / p var.textContent = time
    timeContainer.append(hourBlock)
} 