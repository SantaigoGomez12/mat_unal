// Angulo de referencia
function ang_refe (angulo) {
    angulo < 0 ? angulo = angulo * -1 : angulo = angulo;

    let first = parseInt(angulo / 360);
    let second = first * 360;
    let third = angulo - second;
    
    third <= 90 && third >=0 ? third = third :
    third >= 90 && third <= 180 ? third = 180 - third : 
    third == 180 ? third = 0 : 
    third >= 180 && third <= 270 ? third = third - 180 : 
    third >= 270 && third <=360 ? third = 360 - third : console.log("Err");

    return third
}
console.log(ang_refe(25000));

// Radianes a grados
function rad_gra (nume, deno) {
    return grados = (nume * 180) / (deno  * 1);
}
console.log(rad_gra(11,6));

// Angulo conterminal 
function ang_terminal (angulo) {
    let new_angle = parseInt(angulo / 360);
    let vuletas = new_angle * 360;
    return angulo - vuletas
}
console.log(ang_terminal(23573));

// Posicion estandar
function tan_cos (tan) {
    value1 = Math.atan(tan);
    return Math.cos(value1).toFixed(5)
}
console.log(tan_cos(-1/31));

function sec_sen (sec) {
    let value1 = math.asec(sec)
    return Math.sin(value1).toFixed(5)
}
console.log(sec_sen(-26));

function cot_cos (cot) {
    let value1 = math.acot(cot).toFixed(4)
    console.log(value1);
    return Math.cos(value1).toFixed(5)
}
console.log(cot_cos(1/25));