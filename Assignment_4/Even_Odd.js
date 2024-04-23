const getvalue=()=>{
    let num1=document.getElementById("num1").value;

    three(num1);
    console.log(num1);
}

const three=(num1)=>{
    console.log(num1);
    if(num1%2==0)
    {
        document.getElementById("result").innerHTML="It's an Even Number.....!";
    }
    else
    {
        document.getElementById("result").innerHTML="It's an Odd Number.....!";
    }
}