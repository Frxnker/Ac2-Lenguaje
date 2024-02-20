/*
// Devuelve un número aleatorio entre min (incluido) y max (excluido)
function getRandomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;    
}
*/

// Función para el ejercicio 1
function calcularDiaSemana1() {
    var numero = parseInt(document.getElementById("numero_ejercicio3").value);

    if (numero >= 1 && numero <= 7) {
        var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        var dia = dias[numero - 1];
        document.getElementById("parrafo1").innerHTML = "El número " + numero + " corresponde al día de la semana " + dia + ".";
    } else {
        alert("El número debe estar entre 1 y 7.");
    }
}

// Función para el ejercicio 2
function calcularDiaSemana2() {
    var numero = parseInt(document.getElementById("numero_ejercicio4").value);

    switch (numero) {
        case 1:
            document.getElementById("parrafo2").innerHTML = "El número 1 corresponde al día de la semana Lunes.";
            break;
        case 2:
            document.getElementById("parrafo2").innerHTML = "El número 2 corresponde al día de la semana Martes.";
            break;
        case 3:
            document.getElementById("parrafo2").innerHTML = "El número 3 corresponde al día de la semana Míercoles.";
            break;
        case 4:
            document.getElementById("parrafo2").innerHTML = "El número 4 corresponde al día de la semana Jueves.";
            break;
        case 5:
            document.getElementById("parrafo2").innerHTML = "El número 5 corresponde al día de la semana Viernes.";
            break;
        case 6:
            document.getElementById("parrafo2").innerHTML = "El número 6 corresponde al día de la semana Sábado.";
            break;
        case 7:
            document.getElementById("parrafo2").innerHTML = "El número 7 corresponde al día de la semana Domingo.";
            break;
        default:
            alert("El número debe estar entre 1 y 7.");
    }
}

// Función para el ejercicio 3
function calcularNotas() {
    var nota = parseFloat(document.getElementById("nota").value);

    if (nota >= 0 && nota <= 10) {
        if (nota >= 0 && nota < 5) {
            document.getElementById("parrafo3").innerHTML = "Insuficiente";
        } else if (nota >= 5 && nota < 6) {
            document.getElementById("parrafo3").innerHTML = "Suficiente";
        } else if (nota >= 6 && nota < 7) {
            document.getElementById("parrafo3").innerHTML = "Bien";
        } else if (nota >= 7 && nota < 9) {
            document.getElementById("parrafo3").innerHTML = "Notable";
        } else {
            document.getElementById("parrafo3").innerHTML = "Sobresaliente";
        }
    } else {
        alert("La nota debe estar entre 0 y 10.");
    }
}

// Función para el ejercicio 4
function calcularOperacion() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado;

    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            break;
        case "restar":
            resultado = numero1 - numero2;
            break;
        case "multiplicar":
            resultado = numero1 * numero2;
            break;
        case "dividir":
            if (numero2 != 0) {
                resultado = numero1 / numero2;
            } else {
                alert("No se puede dividir entre 0.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    document.getElementById("parrafo4").innerHTML = "El resultado es: " + resultado.toFixed(2);
}

// Función para el ejercicio 5
function calcularNIF() {
    var nif = parseInt(document.getElementById("nif").value);
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (isNaN(nif) || nif < 10000000 || nif > 99999999) {
        alert("El NIF debe ser un número de 8 dígitos.");
        return;
    }

    var letraCalculada = letras.charAt(nif % 23);
    document.getElementById("parrafo5").innerHTML = "El NIF completo es: " + nif + letraCalculada;
}

// Función para el ejercicio 6
function mostrarDados() {
    var numDados = parseInt(prompt("Introduce un número entre 1 y 10 para simular el lanzamiento de dados:"));
    var parrafo = document.getElementById("parrafo6");

    if (numDados < 1 || numDados > 10 || isNaN(numDados)) {
        parrafo.innerHTML = "Número de dados incorrecto.";
        return;
    }

    parrafo.innerHTML = "";

    for (var i = 0; i < numDados; i++) {
        var numeroAleatorio = getRandomIntNumber(1, 6);
        var img = document.createElement("img");
        img.src = "images/dado" + numeroAleatorio + ".svg";
        img.width = 100;
        img.height = 100;
        parrafo.appendChild(img);
    }
}

function getRandomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para el ejercicio 7
function nuneroSecreto() {
    var numeroMaximo = parseInt(document.getElementById("maximo").value);
    var intentosMaximos = parseInt(document.getElementById("intentos").value);
    var numeroSecreto = getRandomIntNumber(1, numeroMaximo);
    var mensaje = "";
    var error = "";

    for (var i = 0; i < intentosMaximos; i++) {
        var intentoUsuario = parseInt(prompt("Intento " + (i + 1) + ". Adivina el número secreto (entre 1 y " + numeroMaximo + "):"));

        if (intentoUsuario === numeroSecreto) {
            mensaje = "¡Felicidades! ¡Has acertado el número secreto!";
            document.getElementById("parrafo7").innerHTML = mensaje;
            return;
        } else if (intentoUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");
        }
    }

    if (isNaN(numeroMaximo) || isNaN(intentosMaximos)) {
        alert ("¡Lo siento! No has introducido ningún dato para empezar el juego.");
        document.getElementById("parrafo7").innerHTML = error;
        return;
    }

    mensaje = "¡Lo siento! Has agotado todos los intentos. El número secreto era " + numeroSecreto;
    document.getElementById("parrafo7").innerHTML = mensaje;
}

function getRandomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
