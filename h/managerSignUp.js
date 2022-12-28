

let load = document.querySelector("#btn");
let myForm = document.querySelector("#registration-form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
let Submit = () =>{
    let sendForm = new FormData(myForm);

    fetch('https://localhost:44315/api/Manager/RegisterProjectManager',
        {
            method : 'POST',
            body : sendForm,
            headers : {
                "Content-Type": "multipart/form-data"
            },

        })
        .then((response) => 
             response.json())
        .then((value) => {
            console.log("set");
            console.log(value);

            if(value.IsSuccess == true)
            {
                console.log("successful");

                window.location.assign("signin.html");
            }
            else{
                console.log("Opps!");
                window.alert(`${value.message}`);
                window.location.reload();
            }
        })
        .catch((resp) =>
        {
            window.alert("An error occured pls reload");
            window.location.reload();

        })

}


