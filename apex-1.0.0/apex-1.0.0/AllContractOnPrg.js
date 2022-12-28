let btn = document.querySelector("#hideal");
var id = window.location.href.split('=')[1];
var managerId = localStorage.getItem("managerId");
var ManagerName = localStorage.getItem("ManagerName");

//var id = 

console.log("Welcome");
var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetAllContractsOnProgress`);
  let contracts = await unContracts.json();
  console.log(contracts); 
  return contracts;
} 
let displayContracts = async () => {
    console.log("1");
    let count = 0;
    let response = await fetchInitiatedContracts();
    let tableData = document.querySelector("#table-data");
    response.data.forEach(element => {
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
            
            <td><button class="btn btn-primary rounded-pill m-2" id="g"  >View Progress</button></td>
           
    </tr>`
    if(response.data.length < 1)
    {
      tableData.innerHTML = 
      `<td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Bid(${element.id})" >No Contracts on Progress</button></td>`

    }
  }
)};



// btn.addEventListener("click", t(e) =>{
//   e.target.id;
// })
// console.log(btn)


