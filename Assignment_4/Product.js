const getvalue=()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let num3=document.getElementById("num3").value;
    let num4=document.getElementById("num4").value;
    let num5=document.getElementById("num5").value;

    let answer=mul(num1,num2,num3,num4,num5);

    document.getElementById("result").innerHTML=answer;
}


const mul=(num1,num2,num3,num4,num5)=>{
    
   let ans=parseInt(num1)*parseInt(num1)*parseInt(num1)*parseInt(num1)*parseInt(num1);

   return ans;
}