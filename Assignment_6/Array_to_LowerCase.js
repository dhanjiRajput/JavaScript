let arr=["RED","AND","WHITE","INSTITUTE"];

let n=arr.length;

const convert=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            console.log(arr[i].toUpperCase());
        }
        else{
            console.log(arr[i].toLowerCase());
        }
    }
}

convert(arr);
