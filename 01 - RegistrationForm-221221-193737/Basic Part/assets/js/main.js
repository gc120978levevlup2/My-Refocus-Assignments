import regions from "./regions.js";
import vaxdoses from "./vaxdoses.js";

window.onload = (event) => {
    const regionSelect = document.querySelector('#region');
    for (let region of regions()){
        regionSelect.innerHTML += `<option value="${region.numeral}">${region.name}</option>`
    }
    const vaxdose1Select = document.querySelector('#vaxDose1');
    for (let dose of vaxdoses()){
        vaxdose1Select.innerHTML += `<option value="${dose.numeral}">${dose.name}</option>`
    }
    const vaxdose2Select = document.querySelector('#vaxDose2');
    for (let dose of vaxdoses()){
        vaxdose2Select.innerHTML += `<option value="${dose.numeral}">${dose.name}</option>`
    }
    const isVax2yes = document.querySelector('#isVax2yes');
    const isVax2no = document.querySelector('#isVax2no');
    isVax2yes.addEventListener('change',(e) =>{
        if (e.target.checked === true){
            console.log(true)
            document.querySelector('.isVax2').classList.remove("disableDiv");
        }
    });
    isVax2no.addEventListener('change',(e) =>{
        if (e.target.checked === true){
            console.log(true)
            document.querySelector('.isVax2').classList.add("disableDiv");
        }
    });
}

