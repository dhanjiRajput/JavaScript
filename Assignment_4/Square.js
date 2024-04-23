const getvalue=()=>{
    let num1=document.getElementById("num1").value;

    document.getElementById("result").innerHTML=three(num1);
}

const three=(num1)=>{

    return num1*num1;
}