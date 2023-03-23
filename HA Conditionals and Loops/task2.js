function spO2Alert(spO2Level){
    let alert = 'SPO2 level not in range';
    if (spO2Level >= 96) {
        alert = 'Normal reading.';
    }else
    if (spO2Level === 95) {
        alert = 'Acceptable to continue home monitoring.';
    }else
    if ((spO2Level >= 93) && (spO2Level <= 94)){
        alert = 'Seek advice from health professionals.';
    }else
    if (spO2Level <= 92){
        alert = 'Seek urgent medical advice.';
    } 
    return alert;  
}

function pulseRateAlert(beatsPerMin){
    let alert = 'beats per minute not in range';
    if ((beatsPerMin >= 40) && (beatsPerMin <= 100)){
        alert = 'Normal reading.';
    }else
    if ((beatsPerMin >= 101) && (beatsPerMin <= 109)){
        alert = 'Acceptable to continue home monitoring.';
    }else
    if ((beatsPerMin >= 110) && (beatsPerMin <= 130)){
        alert = 'Seek advice from health professionals.';
    }else
    if (beatsPerMin >= 131){
        alert = 'Seek urgent medical advice.';
    } 
    return alert;      
}

for (let i = 90; i <= 100; i++){
    console.log(`${i}% spO2 level -> ${spO2Alert(i)}`);
}

console.log(``);

for (i = 40; i <= 135; i++){
    console.log(`${i} beats per minute (Pulse Rate) -> ${pulseRateAlert(i)}`);
}