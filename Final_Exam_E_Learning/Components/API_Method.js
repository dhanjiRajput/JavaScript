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

export const course_api = {
    Post: async(data)=>{
        let req = await fetch (`http://localhost:3000/course`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
    },
    
    Patch: async(data,id)=>{
        let req = await fetch (`http://localhost:3000/course/${id}`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
    },

    get:async()=>{
        let req = await fetch(`http://localhost:3000/course`);
        let res = await req.json();
        return res;
    }
}

export const dashboard_api = {
    Post: async(data)=>{
        let req = await fetch (`http://localhost:3000/dashboard`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
    },

    get:async()=>{
        let req = await fetch(`http://localhost:3000/dashboard`);
        let res = await req.json();
        return res;
    }
}