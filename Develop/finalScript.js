// header date - using moment.js (https://momentjs.com/docs/#/displaying/)

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do h A');
    $("#currentDay").text(currentHeaderDate);

}

getHeaderDate();

// creating objects
var dataTemplate = { "9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "", "16": "", "17": "", }


//  create a for loop to list 8 hrs
var timeContainer = $(".container")
 
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

// this variable is the dynamic class declaration for the text areas
    var textColor = ""   

    if (currentTime > checkTime) {
        textColor = "past"
    } else if (currentTime === checkTime) {
        textColor = "present"
    } else if (currentTime < checkTime) {
        textColor = "future"
    }

   
    var localStorageData = JSON.parse(localStorage.getItem('textinput')) || dataTemplate
    let hourRow = $(`<div class = 'row'><p id="mainRow" class = 'hour col-2 justify content left'>${time}</p><textarea id="${checkTime}" class = '${textColor} text col-8 d-flex justify content center'>${localStorageData[checkTime]}</textarea><button id="save" class = 'saveBtn col-2'>Submit</button></div>`)
   
    timeContainer.append(hourRow)

};



var button = document.querySelectorAll('.saveBtn');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event.target.previousElementSibling.value)
        console.log(event.target.previousElementSibling.id)
        var textAreaValue = event.target.previousElementSibling.value
        var textAreaId = event.target.previousElementSibling.id
        dataTemplate[textAreaId] = textAreaValue
        localStorage.setItem('textinput', JSON.stringify(dataTemplate))
    })
}