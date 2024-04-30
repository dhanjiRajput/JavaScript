let str="redandwhite";

let count=0;
let comp=0;
for(let i=0;i<str.length;i++)
{
    if(str[i]=='A' || str[i]=='a' || str[i]=='E' || str[i]=='e' || str[i]=='I' || str[i]=='i' || str[i]=='O' || str[i]=='o' || str[i]=='U'|| str[i]=='u')
    {
        comp=1;
    }
}



if(comp==1)
{
    console.log("Vowel is There");
}
else
{
    console.log("Vowel is Not There");
}