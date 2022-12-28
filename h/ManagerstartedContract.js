var BASEURL = "https://localhost:44315/api/"
var id = localStorage.getItem("managerId");
let fetchAcceptedContracts = async () => {
    let unContracts = await fetch(`${BASEURL}Contract/GetManagerStartedProject/${id}`);
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
              
              <td><button class="btn btn-primary rounded-pill m-2" id=${element.id} >UpdateContract</button></td>
      </tr>`
      redirect()
    }
  )};
  function Move()
  {
    window.location.href = `UpDateContract.html?id=${e.target.id}`

  }
  //ifeoluwa@wordenhcd.com
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