//setinterval is very useful here as it allows to repeat everything after 1 


let day = document.getElementById('day')
let date = document.getElementById("date")
let yr = document.getElementById('year')
let month = document.getElementById('month')
let x = new Date();

let days = ["SUNDAY", "MONDAY", " TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let months =["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]

day.textContent = days[x.getUTCDay()]
date.textContent = x.getUTCDate()
yr.textContent = x.getUTCFullYear()
month.textContent = months[x.getUTCMonth()]

console.log(x)


setInterval(function () {

    let hr = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    let x = new Date();
    let y = x.getHours();

    //For hours and seconds
    //60mins=360degrees
    //1 min=6degrees
    //t=0=>15min

    //For hours
    //12 hours=360 deg
    //1 hr=30deg
    //t=0=>3



    if (y > 12)
        y = y - 12;

    let deg_hr = (y - 3) * 30;
    let deg_min = (x.getMinutes() - 15) * 6;
    let deg_sec = (x.getSeconds() - 15) * 6;

    hr.setAttribute("style", 'transform:rotateZ(' + deg_hr + "deg)")
    min.setAttribute("style", 'transform:rotateZ(' + deg_min + "deg)")
    sec.setAttribute("style", 'transform:rotateZ(' + deg_sec + "deg)")

}, 1000)


