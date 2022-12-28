let bid = document.querySelector("#bibbedcontract")
let StartContract = document.querySelector("#start")
let startCount = document.querySelector("#starter")
var managerId = localStorage.getItem("managerId");


var BASEURL = "https://localhost:44315/api/"
//var count = 0;

  //let unContracts = await fetch(`${BASEURL}Contract/GetInitiatedContracts`);
  let fetchInitiatedContracts = async () => {
    let unContracts = await fetch(`${BASEURL}Contract/GetInitiatedContracts`);
    let contracts = await unContracts.json()
    bid.innerHTML = contracts.data.length

    console.log(contracts); 
    return contracts;
  } 
  fetchInitiatedContracts();
 // var count = fetchInitiatedContracts.length;
  //console.log(count)
 // bid.innerHTML = count;
   function BidRoad() {
    window.location.href = "AllContracts.html"
  }
  var id = localStorage.getItem("managerId");
  function Update(){
    window.location.href = "ManagerStartedProject.html"
  }
let fetchAcceptedContracts = async () => {
    let unContracts = await fetch(`${BASEURL}Contract/GetManagerAcceptedContracts/${managerId}`);
    let contracts = await unContracts.json();
    startCount.innerHTML = contracts.result.data.length
    console.log(contracts); 
    return contracts;
  } 
  fetchAcceptedContracts();

  // let Show = async()=>{
  //   var startCounter = fetchInitiatedContracts();
  //   var sendForm = startCounter.result.data.length
  //   console.log(startCounter)
  //   console.log(sendForm)
  //   console.log("kjyhtg");
  //   bid.innerHTML=sendForm
  // }
  var startCounter = fetchInitiatedContracts();
    var sendForm = startCounter.result.data.length
    console.log(startCounter)
    console.log(sendForm)
    console.log("kjyhtg");
    bid.innerHTML=sendForm
    var startCounter = fetchAcceptedContracts();
    var sendForm = startCounter.result.data.length
    console.log(startCounter)
    console.log(sendForm)
    console.log("kjyhtg");
    bid.innerHTML=sendForm
  Show();
  function Start() {
    window.location.href = "managerAcceptedContracts.html"
  }

