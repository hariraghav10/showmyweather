
adddata();
function adddata(){
    var accesskey="45232c6f4340f7f00d20fdd4ed26b423";

    navigator.geolocation.getCurrentPosition((position) => {
    //console.log(position.coords.latitude, position.coords.longitude);
    
    urll="http://api.weatherstack.com/current?access_key="+accesskey+"&query="+position.coords.latitude+","+position.coords.longitude;
    //console.log(urll);
    fetch(urll)
    .then(res=>res.json())
    .then(data=>{
       // console.log(data);
        temperature.innerHTML=data.current.temperature;
        description.innerHTML=data.current.weather_descriptions[0];
        speed.innerHTML=data.current.wind_speed;
        place.innerHTML=data.location.name+" "+data.location.region;
        datetime.innerHTML=date;
        content.style.display="block";
    })
    .catch();



})}
var temperature=document.getElementById('temperature');
var description=document.getElementById('weather');
var speed=document.getElementById('speed');
var place=document.getElementById('place');
var datetime=document.getElementById('datetime');
var butn=document.getElementById('refresh');
var date= new Date().toDateString();
var content=document.getElementById('content');
butn.addEventListener('click', function() {
   // alert("Hello! I am an alert box!!");
    adddata();
})






