//Starting the project
let timeval;
let todaysDate;
let a;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    var newt = nd.getHours() + ':' + nd.getMinutes()+ ':'+nd.getSeconds();
    return "Time in city "+ city.bold() +" is "+newt.bold()+' on '+ nd.toLocaleDateString(undefined,options).bold();
}


setInterval(()=>{
    a = new Date();
    timeval = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    
    todaysDate = a.toLocaleDateString(undefined,options);
    document.getElementById('time').innerHTML = timeval+ ' on <br>' +todaysDate;
    document.getElementById('otherTimes').innerHTML = calcTime('Bombay','+5.5') + '<br>'+ calcTime('Singapore','+8') + '<br>'+calcTime('London', '+1')+'<br>'+ calcTime('Hawaii','-10')+'<br>'+ calcTime('Dublin','+1')+'<br>'+ calcTime('Moscow' , '+3');
    
},1000);

const showOtherTime = () =>{
    var x = document.getElementById("otherTimes");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('toClick').innerText = 'Hide';
      } else {
        document.getElementById('toClick').innerText = 'Browse Times';
        x.style.display = "none";
      }
};