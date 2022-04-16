
// header date - using moment.js (https://momentjs.com/docs/#/displaying/)
// READ MOMENT DOCUMENT & to color code the hours - integrate moment js outside of for loop
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do h A');
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

// var timeContainer = document.querySelector(".container")

// //  create a for loop to list 8 hrs 
// for (var i = 0 ; i < 9 ; i++) {
//     let hourBlock = document.createElement("div")
//     //  create a var for p html element
//     let num = document.createElement("p")
//     // create a var for textarea html element
//     let txtArea = document.createElement("textarea")
//     // create a var for button 
//     let btn = document.createElement("button")
//     // create a variable and then if statement i = 0, then 
//     let time = "" 
//     if (i === 0 ){
//         time = "9 am"
//     } else if ( i === 1 ){
//         time = "10 am"

//     } else if ( i === 2 ){
//         time = "11 am"

//     } else if ( i === 3 ){
//         time = "12 pm"

//     } else if ( i === 4 ){
//         time = "1 pm"

//     } else if ( i === 5 ){
//         time = "2 pm"

//     } else if ( i === 6 ){
//         time = "3 pm"

//     } else if ( i === 7 ){
//         time = "4 pm"

//     } else if ( i === 8 ){
//         time = "5 pm"

//     }

//     // hourBlock.textContent = time
//     num.textContent = time
//     // add all the classes we have in model html for rows in the corresponding variable virtualized html elements
//     hourBlock.setAttribute("class", "row")
//     num.setAttribute("class","hour col-2 justify content left")
//     txtArea.setAttribute("class", "text col-8 d-flex justify content center")
//     btn.setAttribute("class","saveBtn col-2")
//     // append p,textarea and button appended to hourblock ; then change hourBlock to new p variable / p var.textContent = time
//     hourBlock.append(num,txtArea,btn)
//     timeContainer.append(hourBlock)
// } 

// jquery 


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
    let num = $(`<p class = 'hour col-2 justify content left'>${time}</p>`)
    // create a var for textarea html element
    let txtArea = $("<textarea class = 'text col-8 d-flex justify content center'></textarea>")
    // create a var for button 
    let btn = $("<button class = 'saveBtn col-2'></button>")
    // create a variable and then if statement i = 0, then 
    let hourRow = $(`<div class = 'row'><p class = 'hour col-2 justify content left'>${time}</p><textarea class = 'text col-8 d-flex justify content center'></textarea><button class = 'saveBtn col-2'></button></div>`)
    // no jquery equivalent for the below so leave them as it is 
    // hourBlock.append(num,txtArea,btn)
    // timeContainer.append(hourBlock)
    timeContainer.append(hourRow)

};

// write code that alllows you to change the color of the text area based on the time of the day WE want the color changed to grey, red and green - double check your code real time 
// let presentHour = moment().format('hA');
// let data =  $("<textarea class = 'text col-8 d-flex justify content center'></textarea>");

function changeColor() {
    let presentHour = moment().format('hA');
let data =  $("<textarea class = 'text col-8 d-flex justify content center'></textarea>");
    if (data === presentHour){
        
    };
};


 






//  getting the values in the text area stored within local storage
// write code to align the text you input pertains to the hour you added it to
//  make sure the info we are storing in local storage is not detroying the old information

