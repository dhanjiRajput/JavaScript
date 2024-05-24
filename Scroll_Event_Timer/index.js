const timer=(count,id,speed)=>{

    let counter=0;
    let interval=setInterval(()=>{
        
        counter=counter+1;

        document.querySelector(id).innerHTML=counter;
        
        if(counter==count){
            clearInterval(interval);
        }
    },speed);
}

let count1=document.getElementById("count1").innerHTML;
let count2=document.getElementById("count2").innerHTML;
let count3=document.getElementById("count3").innerHTML;
let count4=document.getElementById("count4").innerHTML;

timer(count1,"#count1",400);
timer(count2,"#count2",300);
timer(count3,"#count3",200);
timer(count4,"#count4",100);
