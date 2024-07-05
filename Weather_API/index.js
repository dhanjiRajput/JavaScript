const getdata=async(cityname)=>{
    let req=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`);
    let res=await req.json();
    mapper(res);
}

document.getElementById("data").addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityname=document.getElementById("cityname").value;
    getdata(cityname);
})

document.getElementById("data").addEventListener("input",(e)=>{
    e.preventDefault();
    let cityname=document.getElementById("cityname").value;
    getdata(cityname);
})

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";
    document.getElementById("weather_image").innerHTML="";
    document.getElementById("temp_min").innerHTML="";
    document.getElementById("pressure").innerHTML="";
    document.getElementById("sea_level").innerHTML="";
    document.getElementById("div2_4").innerHTML="";
    document.getElementById("wind").innerHTML="";
    document.getElementById("div3").innerHTML="";

    let cityname=document.createElement("h3");
    cityname.innerHTML=`${data.name}`;

    let feels=document.createElement("span");
    feels.innerHTML=`Feels Like : ${data.main.feels_like}<br><br>`;
    feels.setAttribute("id","feels");

    let temperature=document.createElement("h1");
    temperature.innerHTML=`${Math.round(data.main.temp)} C.`;

    let img=document.createElement("img");
    let img1=document.createElement("img");
    if(Math.round(data.main.temp)>=30){
        img.src="https://www.transparentpng.com/thumb/sun/gold-sun-clip-art-at-pictures-13.png";
        document.getElementById("weather_image").append(img);
        img1.src="https://www.snexplores.org/wp-content/uploads/2019/11/860_main_cj_clouds_questions.png";
        document.getElementById("div2_4").append(img1);
    }else if(Math.round(data.main.temp)>=20 && Math.round(data.main.temp)<=30){
        img.src="https://png.pngtree.com/png-vector/20240126/ourmid/pngtree-cute-rain-cloud-png-image_11496082.png";
        document.getElementById("weather_image").append(img);
        img1.src="https://custom-doodle.com/wp-content/uploads/doodle/rainbow-clouds/rainbow-clouds-doodle.gif";
        document.getElementById("div2_4").append(img1);
    }else if(Math.round(data.main.temp)>=10 && Math.round(data.main.temp)<=19){
        img.src="https://png.pngtree.com/png-vector/20240617/ourmid/pngtree-christmas-snow-man-with-mountain-sign-image-holiday-png-image_12761994.png";
        document.getElementById("weather_image").append(img);
        img1.src="https://preview.redd.it/ljs5ofud70j51.png?width=640&crop=smart&auto=webp&s=b6a837df824c74f6a96f07718cbe48a1b3282475";
        document.getElementById("div2_4").append(img1);
    }
    img.setAttribute("id","sun");
    img1.setAttribute("id","img1");

    let box=document.createElement("div");
    box.append(cityname,feels,temperature);

    document.getElementById("show_data").append(box);

    let min_label=document.createElement("span");
    min_label.innerHTML="Minimum Temperature"
    let temp_min=document.createElement("h5");
    temp_min.innerHTML=`${data.main.temp_min}`;

    let max_label=document.createElement("span");
    max_label.innerHTML="Maximum Temperature"
    let temp_max=document.createElement("h5");
    temp_max.innerHTML=`${data.main.temp_max}`;

    min_label.setAttribute("id","feels");
    max_label.setAttribute("id","feels");

    document.getElementById("temp_min").append(min_label,temp_min,max_label,temp_max);

    let pressure_label=document.createElement("span");
    pressure_label.innerHTML="Pressure"
    let pressure=document.createElement("h5");
    pressure.innerHTML=`${data.main.pressure}`;

    let humidity_label=document.createElement("span");
    humidity_label.innerHTML="Humidity";
    let humidity=document.createElement("h5");
    humidity.innerHTML=`${data.main.humidity}`;

    pressure_label.setAttribute("id","feels");
    humidity_label.setAttribute("id","feels");

    document.getElementById("pressure").append(pressure_label,pressure,humidity_label,humidity);

    let sea_label=document.createElement("span");
    sea_label.innerHTML="Sea Level"
    let sea=document.createElement("h5");
    sea.innerHTML=`${data.main.sea_level}`;

    let grnd_label=document.createElement("span");
    grnd_label.innerHTML="Ground Level";
    let grnd=document.createElement("h5");
    grnd.innerHTML=`${data.main.grnd_level}`;

    sea_label.setAttribute("id","feels");
    grnd_label.setAttribute("id","feels");

    document.getElementById("sea_level").append(sea_label,sea,grnd_label,grnd);

    let wind_label=document.createElement("span");
    wind_label.innerHTML="Speed";
    let wind=document.createElement("h5");
    wind.innerHTML=data.wind.speed;
    let degree_label=document.createElement("span");
    degree_label.innerHTML="Degree";
    let degree=document.createElement("h5");
    degree.innerHTML=data.wind.deg;

    wind_label.setAttribute("id","feels");
    degree_label.setAttribute("id","feels");

    document.getElementById("wind").append(wind_label,wind,degree_label,degree);

    let wthr_label=document.createElement("span");
    wthr_label.innerHTML="Weather"
    let wthr=document.createElement("h5");
    wthr.innerHTML=`${data.weather[0].main}<br><br>`;
    let base_label=document.createElement("span");
    base_label.innerHTML="Base";
    let base=document.createElement("h5");
    base.innerHTML=`${data.base}<br><br>`;
    let visibility_label=document.createElement("span");
    visibility_label.innerHTML="Visibility";
    let visibility=document.createElement("h5");
    visibility.innerHTML=`${data.visibility}<br><br>`;
    let img2=document.createElement("img");
    img2.src="https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-weather-forecast-icon-atmosphere-png-image_10541072.png";
    img2.setAttribute("id","sun");

    wthr_label.setAttribute("id","feels");
    base_label.setAttribute("id","feels");
    visibility_label.setAttribute("id","feels");

    document.getElementById("div3").append(wthr_label,wthr,base_label,base,visibility_label,visibility,img2);
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