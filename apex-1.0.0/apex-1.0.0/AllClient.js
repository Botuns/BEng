let namee = document.querySelector("#first-name");
let card = document.querySelector(".card-container");
let phone =  document.querySelector("#phone");
console.log("ertt")
var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Manager/GetAllManagers`);
  let contracts = await unContracts.json();
  console.log(contracts); 
  contracts.data.forEach(element => {
    card +=
 
        namee.innerHTML = element.firstName
        phone.innerHTML = element.phoneNumber

       

    }
    )};
fetchInitiatedContracts()


let displayContracts = async () => {
    console.log("1");
    let count = 0;
    let response = await fetchInitiatedContracts();
    
      console.log(response)
        count++;
        
    // card +=
    //  namee.innerHTML = response.data.firstName
    //  phone.innerHTML = response.data.phoneNumber

    }
    fetchInitiatedContracts();