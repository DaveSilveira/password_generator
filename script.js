
const recebe = document.getElementById('recebe')
const caracteres = document.querySelector('#caracteres')
const gerar = document.querySelector('#btn')
const maiuscula = document.getElementById('mai')
const minuscula = document.getElementById('min')
const numeros = document.getElementById('num')
const simbolos = document.getElementById('simb')

const sim = '!@#$%&*()_+<>,./|\;:'
const num = '0123456789'
const min = 'abcdefghijklmnopqrstuvxywz'
const mai = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'

let psw = caracteres.value;
let senha = 'teste';

gerar.addEventListener('click', function(){

for(let i = 0; i < psw.lenght; i++){
    let senhaAleatoria = Math.floor(Math.random() * sim.length)
    senha = sim.substring(senhaAleatoria, senhaAleatoria + 1)
}
recebe.placeholder = senha //resultado
});

