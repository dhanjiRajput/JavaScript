export const User_API={
    get_email:async (email)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/users?email=${email}`);
        let res=await req.json();
        return res;
    },

    get:async ()=>{
        let req=await fetch(`https://db-qpsz.onrender.com/users`);
        let res=await req.json();
        return res;
    },

    post:async (data)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/users`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },
}

export const products_API={
    get:async()=>{
        let req=await fetch(`https://db-qpsz.onrender.com/products`)
        let res=await req.json();
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/products`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    }
}

export const cart_API={
    get:async()=>{
        let req=await fetch(`https://db-qpsz.onrender.com/cart`)
        let res=await req.json();
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/cart`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    patch:async (data,id)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/cart/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    delete:async (id)=>{
        let req=await fetch(`https://db-qpsz.onrender.com/cart/${id}`,{
            method:"DELETE",
        })
    },
}