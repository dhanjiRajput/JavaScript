let arr=[1,2,3,4,5,6,7,8,9];
let arr1=[];
let index=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr1[index]=arr[i];
//         index++;
//     }
// }

// for(let i=0;i<index;i++){
//     console.log(arr1[i]);
// }

// In javascript we can do moew sorter code for even number

let filterdata=arr.filter((item)=>item%2==0);
console.log(filterdata);