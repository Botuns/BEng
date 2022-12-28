var numer = document.querySelector("#contnum")
console.log("Welcome");
var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetContractCounts`);
  let contracts = await unContracts.json();
  console.log(contracts); 
  numer.innerHTML = contracts;

  return contracts;
} 
fetchInitiatedContracts();
//var num = fetchInitiatedContracts.length
//console.log(num);