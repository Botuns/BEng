let hire = document.querySelector("#hire");
let service = document.querySelector("#service");
let duration = document.querySelector("#Duration");
let message = document.querySelector("#message");
var id = localStorage.getItem("clientId");
let load = document.querySelector("#btn");
var BASEURL = 'https://localhost:44315/api'

let myForm = document.querySelector("#contract-form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
let Submit = () =>{

    
    let data = {
         
        hireType : hire.value,
        serviceType : service.value,
        contractDuration : duration.value,
        clientMessage : message.value,

        
    };

    const token = localStorage.getItem('setToken');
    console.log(data);
    // const language = localStorage.getItem('language');
    // const header = {
    // Authorization: Bearer <token>
    
    // }

    fetch(`${BASEURL}/Contract/InitiateContract/${id}`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log("ready");
            return response.json();
        })
        .then(value => {
            console.log("set");
            console.log(value);
            console.log(id)
            

            if(value.isSuccess == true)
            {
                window.alert(`${value.message}`);

                window.location.assign("CliDash.html");
            }
            else{
                console.log("Opps!");
                window.alert(`${value.message}`);
                window.location.reload();
            }
        })
        // .catch((resp) =>
        // {
        //     window.alert("An error occured pls reload");
        //     window.location.assign("signin.html");
        
        // })
        }
    






    
