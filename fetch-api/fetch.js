
// using Promise

// const userdata = () =>{

//      const res = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((user)=>console.log(user.map((user)=>user.username)))


//     console.log(res);
// }


// userdata()

// using async await


async function fetchdata() {

    try{

        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json();

        console.log(data)

        if (!data.ok) {

            console.log(data)
            throw new console.error("failed");
            
            
        }
    }catch(error){
        console.log(error)
    }
    
}

fetchdata()