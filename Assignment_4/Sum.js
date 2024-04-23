const getvalue=()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let num3=document.getElementById("num3").value;

    let answer=mul(num1,num2,num3);

    document.getElementById("result").innerHTML=answer;
}


const mul=(num1,num2,num3)=>{
    
   let ans=parseInt(num1)+parseInt(num2)+parseInt(num3);

   return ans;
}