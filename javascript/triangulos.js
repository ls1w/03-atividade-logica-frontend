'use strict'

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const numero3 = document.getElementById('numero3');
const resultado = document.getElementById('resultado');

function limpar() {
    numero1.value = '';
    numero2.value = '';
    numero3.value = '';
    imgTriangulo.setAttribute('src','')
    resultado.innerHTML = '-';
}

function verificar() {

    if (!(testarNumeros())) {
        // AÇÃO SE NÃO FOREM DIGITADOS NÚMEROS VÁLIDOS
        alert('Digite valores inteiros maiores que 0')
        return false;

    } else {
        definirTriangulo();
    }
}

// FUNÇÃO DE TEST SE NÃO SÃO VAZIOS OU MENOR QUE ZERO
function testarNumeros() {
    if (numero1.value <= 0) {
        numero1.focus();
        return false;

    } else if (numero2.value <= 0) {
        numero2.focus();
        return false;

    } else if (numero3.value <= 0) {
        numero3.focus();
        return false;

    } else {
        return true;
    }
}

// FUNÇÃO DEFINIR O NOME DO TRIANGULO
function definirTriangulo() {
    if (numero1.value == numero2.value && numero1.value == numero3.value && numero2.value == numero3.value) {
        resultado.innerHTML = 'É UM TRIÂNGULO EQUILÁTERO!';
        imgTriangulo.setAttribute('src','./img/triangulo-equilatero.webp')

    } else if (numero1.value == numero2.value || numero1.value == numero3.value || numero2.value == numero3.value) {
        resultado.innerHTML = 'É UM TRIÂNGULO ISÓSCELES!';
        imgTriangulo.setAttribute('src','./img/triangulo-isosceles.webp')

    } else {
        resultado.innerHTML ='É UM TRIÂNGULO ESCALENO!';
        imgTriangulo.setAttribute('src','./img/triangulo-escaleno.webp')
    }
}