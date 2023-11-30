'use strict'

const ladoA = document.getElementById('ladoA');
const ladoB = document.getElementById('ladoB');
const ladoC = document.getElementById('ladoC');
const resultado = document.getElementById('resultado');

function limpar() {
    ladoA.value = '';
    ladoB.value = '';
    ladoC.value = '';
    imgTriangulo.setAttribute('src','');
    resultado.innerHTML = '-';
}

function verificar() {
    if (!(testarNumeros())) {
        // AÇÃO SE NÃO FOREM DIGITADOS NÚMEROS VÁLIDOS
        alert('Digite valores inteiros maiores que 0');
        return false;

    } else {
        definirTriangulo();
    }
}

// FUNÇÃO DE TEST SE NÃO SÃO VAZIOS OU MENOR QUE ZERO
function testarNumeros() {
    if (ladoA.value <= 0) {
        ladoA.focus();
        return false;

    } else if (ladoB.value <= 0) {
        ladoB.focus();
        return false;

    } else if (ladoC.value <= 0) {
        ladoC.focus();
        return false;

    } else {
        return true;
    }
}

// FUNÇÃO DEFINIR O NOME DO TRIANGULO
function definirTriangulo() {
    if (ladoA.value == ladoB.value && ladoA.value == ladoC.value) {
        resultado.innerHTML = 'É UM TRIÂNGULO EQUILÁTERO!';
        imgTriangulo.setAttribute('src','./img/triangulo-equilatero.webp');

    } else if (ladoA.value == ladoB.value || ladoA.value == ladoC.value || ladoB.value == ladoC.value) {
        resultado.innerHTML = 'É UM TRIÂNGULO ISÓSCELES!';
        imgTriangulo.setAttribute('src','./img/triangulo-isosceles.webp');

    } else {
        resultado.innerHTML ='É UM TRIÂNGULO ESCALENO!';
        imgTriangulo.setAttribute('src','./img/triangulo-escaleno.webp');
    }
}