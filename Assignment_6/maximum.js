let arr=[1,2,3,4,5,6,7,8,9,-1];

let n=arr.length;

const mini=(arr,n)=>{
    let min=arr[0];
    for(let i=0;i<n;i++)
    {
        if(arr[i]>min)
        {
            min=arr[i];
        }
    }

    return min;
}

console.log(mini(arr,n));