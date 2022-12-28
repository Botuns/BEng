let btn = document.querySelector("#hideal");
var id = window.location.href.split('=')[1];
var clientId = localStorage.getItem("clientId");
var ManagerName = localStorage.getItem("ManagerName");

//var id = 

console.log("Welcome");
var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetClientDeliveredContracts/${clientId}`);
  let contracts = await unContracts.json();
  console.log(contracts); 
  
  return contracts;
  
} 
let displayContracts = async () => {
    console.log("1");
    let count = 0;
    let response = await fetchInitiatedContracts();
    let tableData = document.querySelector("#table-data");
    response.result.data.forEach(element => {
      console.log(element)
        count++;
    tableData.innerHTML += `<tr>
            <td>${count}</td>
            <td>${element.contractInitiatedDate}</td>
            <td>${element.hireType}</td>
            <td>${element.projectProgress}</td>
            <td>${element.contractDuration}</td>
            <td>${element.serviceType}</td>
            <td>${element.clientMessage}</td>
            
            <td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Accept()" >Accept Contract</button></td>
    </tr>`
  }
)};


// btn.addEventListener("click", t(e) =>{
//   e.target.id;
// })
// console.log(btn)


let Accept = () => {

              window.alert("You have just accepted the completion of the project");
              let name = "ACCEPTED";
              let button = document.querySelector("#g");
              button.innerHTML = name;
          
          
      
    };
