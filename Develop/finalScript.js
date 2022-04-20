// header date - using moment.js (https://momentjs.com/docs/#/displaying/)

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do h A');
    $("#currentDay").text(currentHeaderDate);
    
}

getHeaderDate();


var dataTemplate = {"9":"", "10":"","11":"","12":"","13":"","14":"","15":"","16":"","17":"",} // creating objects
// localStorage.setItem('textinput',JSON.stringify(dataTemplate))


var timeContainer = $(".container")
//  create a for loop to list 8 hrs 
for (var i = 0; i < 9; i++) {
    console.log(moment().hours());

    var checkTime = 0

    let time = ""
    if (i === 0) {
        time = "9 am"
        checkTime = 9
    } else if (i === 1) {
        time = "10 am"
        checkTime = 10
    } else if (i === 2) {
        time = "11 am"
        checkTime = 11
    } else if (i === 3) {
        time = "12 pm"
        checkTime = 12
    } else if (i === 4) {
        time = "1 pm"
        checkTime = 13
    } else if (i === 5) {
        time = "2 pm"
        checkTime = 14
    } else if (i === 6) {
        time = "3 pm"
        checkTime = 15
    } else if (i === 7) {
        time = "4 pm"
        checkTime = 16
    } else if (i === 8) {
        time = "5 pm"
        checkTime = 17
    }
    var currentTime = moment().hours()
      var textColor = ""   // this variable is the dynamic class declaration for the text areas

    if (currentTime > checkTime) {
        textColor = "past"
    } else if (currentTime === checkTime) {
        textColor = "present"
    } else if (currentTime <checkTime) {
        textColor = "future"
    }

    let hourBlock = $("<div class = 'row'></div>")
    //  create a var for p html element - $ blue color - template literal
    let num = $(`<p id="mainRow" class = 'hour col-2 justify content left'>${time}</p>`)
    // create a var for textarea html element
    let txtArea = $(`<textarea id="message"class = 'text col-8 d-flex justify content center'></textarea>`)
    // create a var for button 
    let btn = $(`<button  id="save" class = 'saveBtn col-2' >Submit</button>`)
    // create a variable and then if statement i = 0, then
    var localStorageData = JSON.parse(localStorage.getItem('textinput')) || dataTemplate
    let hourRow = $(`<div class = 'row'><p id="mainRow" class = 'hour col-2 justify content left'>${time}</p><textarea id="${checkTime}" class = '${textColor} text col-8 d-flex justify content center'>${localStorageData[checkTime]}</textarea><button id="save" class = 'saveBtn col-2'>Submit</button></div>`)
    // no jquery equivalent for the below so leave them as it is 
    // hourBlock.append(num,txtArea,btn)
    // timeContainer.append(hourBlock)
    timeContainer.append(hourRow)
    
};


// var storageInput = document.querySelector('#message');
var button = document.querySelectorAll('.saveBtn');  // use only the class you use and not 2 classes or bootstrap when  you use querySelector
// var storedInput = localStorage.getItem('textinput');
// if(storageInput) {
//     message.textContent = storageInput
for (let i=0 ; i < button.length; i++) {
button[i].addEventListener('click', (event) => {
    event.preventDefault()
    // console.log (event)
    // console.log(event.target)
    // console.log(event.target.previousElementSibling)
    console.log(event.target.previousElementSibling.value)
    console.log(event.target.previousElementSibling.id)
    var textAreaValue = event.target.previousElementSibling.value
    var textAreaId = event.target.previousElementSibling.id
    dataTemplate[textAreaId] = textAreaValue
    localStorage.setItem('textinput',JSON.stringify(dataTemplate))
})
}

// var saveToLocalStorage = () => {
//     localStorage.setItem('textinput', message.textContent)
// }

// button.addEventListener('click', saveToLocalStorage)

// =============================================================



























// let btn = $(`<button onclick="fn1()" id="save" class = 'saveBtn col-2' >Submit</button>`)

// let txtArea = $(`<textarea id="message"class = 'text col-8 d-flex justify content center'></textarea>`)

// let hourRow = $(`<div class = 'row'><p id="mainRow" class = 'hour col-2 justify content left'>${time}</p><textarea id="message" class = 'text col-8 d-flex justify content center'></textarea><button onclick="fn1" id="save" class = 'saveBtn col-2'>Submit</button></div>`)

// function fn1(){
// var getData = document.getElementById("message").value;
// document.getElementById("message").innerHTML = getData;
// }

// fn1();

// =================================================================================================================================





// function store (){
//     var toDoList = document.getElementsByTagName('textarea').value;
// }

// window.localStorage.setItem('type'. JSON.stringify(toDoList));

// JSON.parse(window.localStorage.getItem('type'));



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
