const Getvalue=()=>{
    let num1=document.getElementById("num1").value;

    let ans=sum(num1);

    document.getElementById("result").innerHTML=ans;
}

const sum=(num1)=>{
    let i,sum=0;
    for(i=1;i<=num1;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }

    return sum;
}