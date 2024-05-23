let time_zone = new Date();

//Find Day
let day = time_zone.getDay();
switch (day) {
    case 0:
        document.getElementById("day").innerHTML = "SUNDAY";
        break;
    case 1:
        document.getElementById("day").innerHTML = "MONDAY";
        break;
    case 2:
        document.getElementById("day").innerHTML = "TUESDAY";
        break;
    case 3:
        document.getElementById("day").innerHTML = "WEDNESDAY";
        break;
    case 4:
        document.getElementById("day").innerHTML = "THURSHDAY";
        break;
    case 5:
        document.getElementById("day").innerHTML = "FRIDAY";
        break;
    case 6:
        document.getElementById("day").innerHTML = "SATURDAY";
        break;
}

//Find Time

const time = () => {
    let h;
    setInterval(() => {
        let time_zone1=new Date();

        let hours = time_zone1.getHours();
        let minute = time_zone1.getMinutes();
        let second = time_zone1.getSeconds();

        minute=zero(minute);
        second=zero(second);

        if(hours<13){
            h="am";
        }
        else{
            h="pm";
        }
        document.getElementById("time").innerHTML=`${hours} : ${minute} : ${second}  ${h}`;
    }, 1000);
}

const zero=(i)=>{
    if(i<10){
        i="0"+i;
    }
    return i;
}

time();

//Find Date
let month2;
let date=time_zone.getDate();
let month=time_zone.getMonth();
let year=time_zone.getFullYear();

let month1=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

for(let i=0;i<month1.length;i++){
    if(month==i){
        month2=month1[i];
    }
}
document.getElementById("date").append(`${date} - ${month2} - ${year}`);