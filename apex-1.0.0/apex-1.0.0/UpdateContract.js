console.log("asdft")
var id = window.location.href.split('=')[1];
let contDur = document.querySelector("#exampleInputUsername2");
let conPrice = document.querySelector("#exampleInputEmail2");
let conDocument = document.querySelector("#exampleInputConfirmPassword2");
let conStatus = document.querySelector("#status");
let conProgress = document.querySelector("#exampleInputPassword2");
let myForm = document.querySelector("#form");

var BASEURL = 'https://localhost:44315/api'

let fetchContracts = async () => {
    let unContracts = await fetch(`${BASEURL}/Contract/GetContractInfo/${id}`);
    let contracts = await unContracts.json();
    // console.log(12); 

    // console.log(contracts); 
    console.log("1");
    console.log(contracts.data)        
    let fr = contracts.data;
        // conDocument.v = frcontractDocument
    console.log("Hello");
    conPrice.value =fr.contractPrice
    conProgress.value = fr.projectProgress
    contDur.value = fr.contractDuration
    conStatus.value = fr.contractStatus
  } 
  fetchContracts();
 myForm.addEventListener("submit", (e) => {
     e.preventDefault();
 });

 let SubmitData = () => {
    //.innerHTML = `<div class="loading add-loading"></div>`
     let sendContForm = new FormData(myForm);
     console.log(sendContForm);
     fetch(`${BASEURL}/Contract/UpdateContract/${id}`,
        {
            method : 'PUT',
            body : sendContForm
        })
        .then((response) => {
            return response.json();
        })
        .then((value) => {
            console.log(value); 
            if(value.isSuccess == true)
            {

                window.alert("Sucessfully Updated")
                
                var rr = window.confirm("Do you want to update another contract?");
                if(rr == true)
                {
                    window.location.href = "managerAcceptedContracts.html"
                }
                window.history.back()
            }
            else
            {
                window.alert(`${value.message}`);
                window.location.reload();
            }
        })
        .catch((resp) => 
        {
            console.log(resp);
            window.alert("Unable to update try again");
            // window.location.reload();
        });
}


