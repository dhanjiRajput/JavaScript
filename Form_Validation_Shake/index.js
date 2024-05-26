const handlevalidation=(isvalid,id,idx,emsg,umsg)=>{

    let value=document.getElementById(id).value;
    let input=document.getElementById(id);

    if(isvalid.test(value)){
        document.getElementById(idx).innerHTML=umsg
        input.classList.remove('error');
    }else{
        document.getElementById(idx).innerHTML=emsg
        input.classList.add('error');
    }
}

const validusername=/^[0-9A-Za-z]{6,16}$/;
document.getElementById("name").addEventListener("input",()=>{
    handlevalidation(validusername,"name","name_msg","Not Valid","Valid...");
})

const validnumber=/^[0-9]{6,10}$/;
document.getElementById("number").addEventListener("input",()=>{
    handlevalidation(validnumber,"number","number_msg","Not Valid","Valid...");
})

