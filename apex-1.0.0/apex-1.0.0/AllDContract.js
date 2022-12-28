var ManagerName = localStorage.getItem("ManagerName");
var managerId = localStorage.getItem("managerId");
var named = localStorage.getItem("Name");

var clientId = localStorage.getItem("clientId");
let nan = document.querySelector("#nan");
let mang = document.querySelector("#mang");


var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetAllContracts`);
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
            <td id = "h">${element.hireType}</td>
            <td>${element.projectProgress}</td>
            <td>${element.contractDuration}</td>
            <td>${element.serviceType}</td>
            <td>${element.clientMessage}</td>
            <td>${element.contractStatus}</td>

            <td><button class="btn btn-primary rounded-pill m-2" id="${element.id}" onclick="redirect()" >Update Contract</button></td>
            
    </tr>`
    let k = document.querySelectorAll("#h")
    if(element.hireType == 1)
    {
        k.innerHTML = "BuildingContractor"
        if(element.hireType == 2)
        {
            k.innerHTML = "CivilEngineer "
            if(element.hireType == 3)
            {
                k.innerHTML = "Builder"
                if(element.hireType == 4)
                {
                    k.innerHTML = "Bricklayer"
                    if(element.hireType == 5)
                    {
                        k.innerHTML = "Architect"
                        if(element.hireType == 6)
                        {
                            k.innerHTML = "Surveyor"
                            if(element.hireType == 7)
                            {
                                k.innerHTML = "SandSuplier"
                                if(element.hireType == 8)
                                {
                                    k.innerHTML = "BuildingCapenter"

                                }

                            }

                        }

                    }

                }

            }

        }

    }
    
}
)};
const redirect = () => {
    var button = document.querySelectorAll(".btn");
    // console.log(button)
    button.forEach(btn => {
      console.log("fsrtyguytuyyii")
      btn.addEventListener("click", (e) => {
        window.location.href = `UpDateContract.html?id=${e.target.id}`
      })
    })
  }
