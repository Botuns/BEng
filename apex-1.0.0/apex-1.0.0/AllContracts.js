var managerId = localStorage.getItem("managerId")
var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetManagerStartedProject/${managerId}`);
  let contracts = await unContracts.json();
  console.log(contracts); 
  return contracts;
} 
let displayContracts = async () => {
    console.log("1");
    let count = 0;
    let response = await fetchContracts();
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
            
            <td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Update(${element.id})" >Update Contract</button></td>
    </tr>`
  }
)};
let Update =() =>{
  buttons = document.querySelectorAll("#g");
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      window.location.href = `UpdateContract.html?id=${e.target.id}`
    })
  })
}
