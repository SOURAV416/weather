document.getElementById('getApi').addEventListener('click',callAPI);
const apiKey='4da8a3d6fc1e4366beb160634232501'
function callAPI(){
    var cityName=document.getElementById('cityName').value;
    const apiUrl=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`


    //alert(cityName);

    //alert(apiUrl);
fetch(apiUrl)
.then((res)=>res.json())
.then((data)=>{
    let output=`
        <div>
            <p style="color:black">${data.current.temp_c}<sup>°C</sup></p>
            <p> The Weather is ${data.current.condition.text} </p>
            <img src=${data.current.condition.icon}></img>
        </div>
        `;
        //console.log(data);

    document.getElementById('output').innerHTML=output;
    }).catch((err)=>console.log(err))
}









