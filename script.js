window.sr = ScrollReveal({ reset: true });

sr.reveal('.title', { 
    rotate: {x:100, y:100, z:0,},
    duration: 1000});

sr.reveal('.decimal', { duration: 3000});
function converterDecimal() {

    let decimal = Number(demoDecimal1.value);

    let octal = decimal.toString(8);

    let hexadecimal = decimal.toString(16);

    let binaria = decimal.toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demoDecimal1").innerHTML = ` ${decimal}`;
    document.getElementById("demoDecimal2").innerHTML = ` ${octal}`;
    document.getElementById("demoDecimal3").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demoDecimal4").innerHTML = ` ${binaria}`;


}
sr.reveal('.Jogador', { duration: 5000});

function aparecer_bin() {
    demoDecimal4.style.display = 'block'
}

function aparecer_hexa() {
    demoDecimal3.style.display = 'block'
}

function aparecer_octal() {
    demoDecimal2.style.display = 'block'
}


sr.reveal('.octal', { duration: 3000});
function converterOctal() {

    let octal = Number(demoOctal1.value);

    let decimal = octal.toString(10);

    let hexadecimal = octal.toString(16);

    let binaria = octal.toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demoOctal1").innerHTML = ` ${decimal}`;
    document.getElementById("demoOctal2").innerHTML = ` ${octal}`;
    document.getElementById("demoOctal3").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demoOctal4").innerHTML = ` ${binaria}`;


}

function aparecer_Octal_decimal() {
    demoOctal2.style.display = 'block'
}

function aparecer_Octal_hexa() {
    demoOctal3.style.display = 'block'
}
function aparecer_Octal_bin() {
    demoOctal4.style.display = 'block'
}

