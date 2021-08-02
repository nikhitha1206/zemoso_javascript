function getData(uId) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            error=false;
            if(!error)
            {
                 console.log("Fetching data....");
                 resolve("skc@gmail.com");
            }
            else
            {
                reject("error:something went wrong");
            }

        },4000)
    })
}
    console.log("start");
    var email = getData("skc");
    email.then((message)=>console.log("Email id of the user id is:"+message))
    console.log("end");
