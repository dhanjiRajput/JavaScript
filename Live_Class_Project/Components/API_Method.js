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
}

export const products_API={
    get:async()=>{
        let req=await fetch(`http://localhost:3000/products`)
        let res=await req.json();
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`http://localhost:3000/products`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    }
}

export const cart_API={
    get:async()=>{
        let req=await fetch(`http://localhost:3000/cart`)
        let res=await req.json();
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`http://localhost:3000/cart`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    patch:async (data,id)=>{
        let req=await fetch(`http://localhost:3000/cart/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    delete:async (id)=>{
        let req=await fetch(`http://localhost:3000/cart/${id}`,{
            method:"DELETE",
        })
    },
}