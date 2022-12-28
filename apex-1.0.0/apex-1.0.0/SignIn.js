let form = document.querySelector("#log-in");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let load = document.querySelector("#btn");
load.addEventListener("click", (e) =>{
    e.preventDefault();
})
let Submit = () => {
    console.log("seen");
    let data = {
        password : password.value,
        email : email.value,
    };
    console.log(data.email)
    console.log(data.password)

   fetch('https://localhost:44315/api/LogIn/Login', {
    method : "POST",
    body: JSON.stringify(data),
        headers : {
        "Content-Type": "application/problem+json",
    },
    
   })
   .then((respose) => {
    console.log("loading...");
    return respose.json();
    })
    .then(function (value) {
        localStorage.setItem("setToken", value.token);
        console.log(localStorage.getItem("setToken"));
        console.log(value);
        if(value.data.isSuccess == true)
        {
            // localStorage.setItem("userId",  value.data.data.id);
            // localStorage.setItem("Named",  value.data.userName);

            
                  
                value.data.data.roles.forEach(element => {
                    if (element.name == "manager") {
                        localStorage.setItem("managerId",  value.data.data.id);
                        localStorage.setItem("ManagerName", value.data.data.userName);
                        console.log("manager");
                        window.location.assign("managerdash.html")
                    }
                    else if (element.name == "admin") {
                        console.log("admin");
                        window.location.href = "admindash.html"
                    }
                    else if (element.name == "client") {
                        console.log("client");
                        
                        localStorage.setItem("Name", value.data.data.userName);
                        localStorage.setItem("clientId",  value.data.data.id);
                       window.location.assign("welcomclient.html")
                    }
                    else
                    {
                        window.alert("You are not fully registered on this app");
                    }
                });
        }
        else
        {
            window.alert("An error occured");
        }
            
    })
    .catch((resp) => {
        window.alert("Invalid email or password");
        location.reload()
        console.log(resp.error);
    })   
}
