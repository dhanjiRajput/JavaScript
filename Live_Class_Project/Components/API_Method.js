export const User_API={
    get_email:async (email)=>{
        let req=await fetch(`http://localhost:3000/users?email=${email}`);
        let res=await req.json();
        return res;
    },

    get:async ()=>{
        let req=await fetch(`http://localhost:3000/users`);
        let res=await req.json();
        return res;
    },

    post:async (data)=>{
        let req=await fetch(`http://localhost:3000/users`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    patch:async (data,id)=>{
        let req=await fetch(`http://localhost:3000/users/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    delete:async (id)=>{
        let req=await fetch(`http://localhost:3000/users/${id}`,{
            method:"DELETE",
        })
    },
}