function helicopter (metros, medida1, medida2) {
    let numerador = 180 - (medida1 + medida2);

    let res_1 = (metros * Math.sin((math.unit(medida2, 'deg').value))) / Math.sin((math.unit(numerador, 'deg').value));
    let res_2 = (metros * Math.sin((math.unit(medida1, 'deg').value))) / Math.sin((math.unit(numerador, 'deg').value));

    let altura = res_1 * Math.sin(math.unit(medida1, 'deg').value)
    
    return [res_1, res_2, altura]
}
console.log(helicopter(280, 37, 27));