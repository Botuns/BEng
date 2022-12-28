var BASEURL = "https://localhost:44315/api/"
var id = localStorage.getItem("managerId");
let fetchAcceptedContracts = async () => {
    let unContracts = await fetch(`${BASEURL}Contract/GetManagerAcceptedContracts/${id}`);
    let contracts = await unContracts.json();
    console.log(contracts); 
    return contracts;
  } 
  let displayContracts = async () => {
      console.log("1");
      let count = 0;
      let response = await fetchAcceptedContracts();
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
              
              <td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Start(${element.id})" >Start Contract</button></td>
      </tr>`
    }
    
  )
  if(response.result.data == null)
    {
      `<td><button class="btn btn-primary rounded-pill m-2" id="g" onclick="Start(${element.id})" >No Contracts</button></td>`

    }
};
  let Start = (cont) => {
  
    fetch(`${BASEURL}Contract/StartContract/${cont}/${id}`,
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
               
               window.alert("You have just started this project");
               let name = "STARTED";
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
 
  