//Starting the project
let timeval;
let todaysDate;
let a;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(()=>{
    a = new Date();
    timeval = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    
    todaysDate = a.toLocaleDateString(undefined,options);
    document.getElementById('time').innerHTML = timeval+ ' on <br>' +todaysDate;
},1000);
