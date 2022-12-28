let form = document.querySelector("#analysis-form")
let a = document.querySelector("#glass")
let b = document.querySelector("#wood")
let c = document.querySelector("#cement")
let d = document.querySelector("#iron")
let e = document.querySelector("#blocks")
let f = document.querySelector("#compt")
let g = document.querySelector("#amount")
let i = document.querySelector("#bty")
let j = document.querySelector("#bts")
let k = document.querySelector("#ath")
let l = document.querySelector("#dur")

let BuildingDuration = l.value
let BuildingAthesticValue = k.value
let BuildingType = i.value
//let BuildingBedroomSpecification = j.value




let fetchAnalysis = async () => {
  fetch(`'https://localhost:44315/api/AnalysisPrediction/GetAnalysis/${2}/${1}/${3}/${2}'`,
        {
            method : 'Get',
            
            // headers : {
            //     "Content-Type": "multipart/form-data"
            // },

        })
        .then((response) => 
             response.json())
        .then((value) => {
            console.log("set");
            console.log(value);

            if(value.isSuccess == true)
            {
                window.alert("Sucessful");
                localStorage.setItem("Analysis",value.data)
                window.location.href = "analysis.html"

                
            }
            // else{
            //     console.log("Opps!");
            //     window.alert(`${value.message}`);
               
            // }
        })
        // .catch((resp) =>
        // {
        //     window.alert("An error occured pls reload");
        //     window.location.reload();

        // })

 
} 
//fetchAnalysis()
let Submit = () =>{
    

    
}