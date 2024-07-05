const getdata=async(cityname)=>{
    let req=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`);
    let res=await req.json();
    mapper(res);
}

getdata();

document.getElementById("data").addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityname=document.getElementById("cityname").value;

    getdata(cityname);
})

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";

    let cityname=document.createElement("h3");
    cityname.innerHTML=`${data.name}`;

    let feels=document.createElement("span");
    feels.innerHTML=`Feels Like : ${data.main.feels_like}<br><br>`
    feels.setAttribute("id","feels")

    let temperature=document.createElement("h1");
    temperature.innerHTML=`${Math.round(data.main.temp)} C.`;

    let box=document.createElement("div");
    box.append(cityname,feels,temperature);

    document.getElementById("show_data").append(box);
}

const getweatherlocation=async(lat,long)=>{
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let res = await req.json()
    mapper(res);
}

const getlocation=()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        let long=position.coords.longitude;
        let lat=position.coords.latitude;
        getweatherlocation(lat,long);
    })
}

getlocation();