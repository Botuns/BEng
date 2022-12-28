

let load = document.querySelector("#btn");
let myForm = document.querySelector("#registration-form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
let Submit = () =>{
    let sendForm = new FormData(myForm);

    fetch('https://localhost:44315/api/Client/RegisterClient',
        {
            method : 'POST',
            body : sendForm,
            // headers : {
            //     "Content-Type": "multipart/form-data"
            // },

        })
        .then((response) => 
             response.json())
        .then((value) => {
            console.log("set");
            console.log(value);

            if(value.isSuccess == true)
            {
                console.log("successful");

                window.location.assign("signin.html");
            }
            else{
                console.log("Opps!");
                window.alert(`${value.message}`);
               // window.location.reload();
            }
        })
        .catch((resp) =>
        {
            window.alert("An error occured pls reload");
            window.location.reload();

        })

}


// let validateBank = (acn, bcode) =>{
//     fetch(`https://api.paystack.co/bank/resolve?account_number=${acn}&bank_code=${bcode}`,
//         {
//             method : 'GET',
//             headers:{
//                 "Authorization" : "Bearer sk_test_c43bd7866c1bd0dd38c7bfcea1c03290ae02d5d3"
//             }

//         })
        