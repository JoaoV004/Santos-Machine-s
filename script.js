window.sr = ScrollReveal({ reset: true });

sr.reveal('.title', { duration: 1500});

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

    let octal = Number(demoOctal1.value)    ;

    octal = parseInt(octal, 8).toString(8);
    decimal = parseInt(octal, 8).toString(10);
    hexadecimal = parseInt(octal, 8).toString(16);
    hexadecimal = hexadecimal.toLocaleUpperCase();
    binaria = parseInt(octal, 8).toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demoOctal1").innerHTML = ` ${octal}`;
    document.getElementById("demoOctal2").innerHTML = ` ${decimal}`;
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



sr.reveal('.hexadecimal', { duration: 3000});
function converterHexadecimal() {

    let hexadecimal = Number(demoHexa1.value)    ;

    octal = parseInt(hexadecimal, 16).toString(8);
    decimal = parseInt(hexadecimal, 16).toString(10);
    hexadecimal = parseInt(hexadecimal, 16).toString(16);
    hexadecimal = hexadecimal.toLocaleUpperCase();
    binaria = parseInt(hexadecimal, 16).toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demoHexa1").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demoHexa2").innerHTML = ` ${octal}`;
    document.getElementById("demoHexa3").innerHTML = ` ${decimal}`;
    document.getElementById("demoHexa4").innerHTML = ` ${binaria}`;


}

function aparecer_Hexa_octal() {
    demoHexa2.style.display = 'block'
}

function aparecer_Hexa_decimal() {
    demoHexa3.style.display = 'block'
}
function aparecer_Hexa_binario() {
    demoHexa4.style.display = 'block'
}





sr.reveal('.binario', { duration: 3000});
function converterBinario() {

    let binaria = Number(demoBin1.value)    ;

    octal = parseInt(binaria, 2).toString(8);
    decimal = parseInt(binaria, 2).toString(10);
    hexadecimal = parseInt(binaria, 2).toString(16);
    hexadecimal = hexadecimal.toLocaleUpperCase();
    binaria = parseInt(binaria, 2).toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demoBin1").innerHTML = ` ${binaria}`;
    document.getElementById("demoBin2").innerHTML = ` ${octal}`;
    document.getElementById("demoBin3").innerHTML = ` ${hexadecimal}`;
    document.getElementById("demoBin4").innerHTML = ` ${decimal}`;


}

function aparecer_Binario_octal() {
    demoBin2.style.display = 'block'
}

function aparecer_Binario_hexa() {
    demoBin3.style.display = 'block'
}
function aparecer_Binario_decimal() {
    demoBin4.style.display = 'block'
}