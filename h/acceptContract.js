var ManagerName = localStorage.getItem("ManagerName");
var managerId = localStorage.getItem("managerId");
var named = localStorage.getItem("Name");

var clientId = localStorage.getItem("clientId");
let nan = document.querySelector("#nan");
let mang = document.querySelector("#mang");
nan.innerHTML = named;
mang.innerHTML = ManagerName;

let Dashbard = () => {
    window.location.assign("CliDash.html")
    
}

var BASEURL = "https://localhost:44315/api/"
let fetchInitiatedContracts = async () => {
  let unContracts = await fetch(`${BASEURL}Contract/GetClientBiddedContracts/${clientId}`);
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
            
            <td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Accept(${element.id})" >Accept Manager</button></td>
            <td><button class="btn btn-primary rounded-pill m-2" id="h" onclick="Accept(${element.id})" >Decline Manager</button></td>

    </tr>`
  }
)};


// btn.addEventListener("click", t(e) =>{
//   e.target.id;
// })
// console.log(btn)


let Accept = (id) => {
  
   fetch(`${BASEURL}Contract/AcceptManager/${id}/${clientId}/${managerId}`,
      {
          method : 'PUT',
          
      })
      .then((response) => {
          return response.json();
      })
      .then((value) => {
          console.log(value); 
          
          if(value.isSuccess == true)
          {
              
              window.alert("You have just accepted for the project");
              let name = "ACCEPTED";
              let button = document.querySelector("#g");
              button.innerHTML = name;
          }
          // else
          // {
          //     window.alert(`${value.message}`);
          //     window.location.reload();
          // }
      })
    };
    let Decline = (id) => {
  
      fetch(`${BASEURL}Contract/DeclineManager/${id}/${clientId}/${managerId}`,
         {
             method : 'PUT',
             
         })
         .then((response) => {
             return response.json();
         })
         .then((value) => {
             console.log(value); 
             
             if(value.isSuccess == true)
             {
                 
                 window.alert("You have just declined this manageer for this the project");
                 let name = "DECLINED";
                 let button = document.querySelector("#h");
                 button.innerHTML = name;
             }
             // else
             // {
             //     window.alert(`${value.message}`);
             //     window.location.reload();
             // }
         })
       };
   

