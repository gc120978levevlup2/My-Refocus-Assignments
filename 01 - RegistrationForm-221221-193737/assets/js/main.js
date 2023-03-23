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
            document.querySelector('.dose-2-input').classList.remove("disableDiv");
        }
    });

    isVax2no.addEventListener('change',(e) =>{
        if (e.target.checked === true){
            console.log(true)
            document.querySelector('.isVax2').classList.add("disableDiv");
            document.querySelector('.dose-2-input').classList.add("disableDiv");
        }
    });

    const form = document.forms.covidRegistrationForm;
    form.addEventListener('submit',(e) =>{
        e.preventDefault();       
        document.querySelector(':root').scroll({top:0,behavior:'smooth'});
        document.querySelector('#verify-input').classList.remove("hidden");
        document.querySelector('.card').classList.add("slideInFromLeft-animation");
        document.querySelector('#firstname-container').innerHTML     = form.firstName.value;
        document.querySelector('#middlename-container').innerHTML    = form.middleName.value;
        document.querySelector('#lastname-container').innerHTML      = form.lastName.value;
        document.querySelector('#birthday-container').innerHTML      = form.birthDay.value;
        document.querySelector('#email-container').innerHTML         = form.email.value;
        document.querySelector('#region-container').innerHTML        = form.region.value + ' - ' + regions().find((x) => x.numeral === form.region.value).name;
        document.querySelector('#province-container').innerHTML      = form.province.value;
        document.querySelector('#barangay-container').innerHTML      = form.barangay.value;
        document.querySelector('#street-container').innerHTML        = form.street.value;
        document.querySelector('#gender-container').innerHTML        = form.gender.value;
        document.querySelector('#vaxdose1-container').innerHTML      = vaxdoses().find((x)=>x.numeral === form.vaxDose1.value ).name;
        document.querySelector('#vaxdose1-date-container').innerHTML = form.vaxDose1Date.value;
        document.querySelector('#vaxdose1-site-container').innerHTML = form.vaxDose1Site.value;
        document.querySelector('#is2ndvax-container').innerHTML      = form.isVax2.value;
        document.querySelector('#vaxdose2-container').innerHTML      = vaxdoses().find((x)=>x.numeral === form.vaxDose2.value ).name;
        document.querySelector('#vaxdose2-date-container').innerHTML = form.vaxDose2Date.value;
        document.querySelector('#vaxdose2-site-container').innerHTML = form.vaxDose2Site.value;
    });

    const cardCloseButton = document.querySelector('#card-close-button');
    cardCloseButton.addEventListener('click',(e) =>{
        document.querySelector('#verify-input').classList.add("hidden");
        document.querySelector('.card').classList.remove("slideInFromLeft-animation");
    });
}

