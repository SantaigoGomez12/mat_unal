function helicopter (metros, medida1, medida2) {
    let numerador = 180 - (medida1 + medida2);

    let res_1 = (metros * Math.sin((math.unit(medida2, 'deg').value))) / Math.sin((math.unit(numerador, 'deg').value));
    let res_2 = (metros * Math.sin((math.unit(medida1, 'deg').value))) / Math.sin((math.unit(numerador, 'deg').value));

    let altura = res_1 * Math.sin(math.unit(medida1, 'deg').value)
    
    return [res_1, res_2, altura]
}
console.log(helicopter(230, 38, 33));

// Lado de paralelorgamo 
function para (lado1, lado2, angulo) {
    let h = (lado1 * Math.sin(math.unit(angulo, 'deg').value))
    let area = lado2 * h;
    return area.toFixed(2)
}
console.log(para(29,30,31));

//  Valores triangulo rojo
function tri_roj (a, bb) {
    let r = a / (Math.cos(math.unit(bb, 'deg').value));
    r = (r - 0.02).toFixed(2)
    let b = (Math.sqrt((r ** 2) - (a ** 2)))
    let angle_a = Math.acos(((a / r) - 0.01).toFixed(2))
    angle_a = (angle_a * Math.PI) / 180
    return [r, b, angle_a]
}
console.log(tri_roj(9, 65));

// lado paralelogramo 
function avion (metros, angulo) {
    return metros / (Math.sin(math.unit(angulo, 'deg').value))
}
console.log(avion(1400, 22));