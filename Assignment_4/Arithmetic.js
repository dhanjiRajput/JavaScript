const Arithmetic=(select,num1,num2)=>{
    let ans;

    if(select=="+")
    {
        ans=parseInt(num1)+parseInt(num2);
    }
    else if(select=="-")
    {
        ans=num1-num2;
    }
    else if(select=="*")
    {
        ans=num1*num2;
    }
    else if(select=="/")
    {
        ans=num1/num2;
    }
    else if(select=="%")
    {
        ans=num1%num2;
    }

    return ans;
}

const Getvalue=()=>{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let select=document.getElementById("select").value;

    let answer=Arithmetic(select,num1,num2);
    document.getElementById("result").innerHTML=answer;

}