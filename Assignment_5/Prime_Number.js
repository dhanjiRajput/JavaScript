const prime=(num)=>{
    // let count=0;
    // for(let i=1;i<=num;i++)
    // {
    //     if(num%i==0){
    //         count++;
    //     }
    // }

    // if(count<=2){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

let num=7;

for(let i=1;i<=num;i++){
    if(prime(num))
    {
        console.log(true);
    }
    else{
        console.log(false);
    }
}