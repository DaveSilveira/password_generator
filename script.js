
const recebe = document.getElementById('recebe')
const caracteres = document.querySelector('#caracteres')
const gerar = document.querySelector('#btn')
const maiuscula = document.getElementById('mai')
const minuscula = document.getElementById('min')
const numeros = document.getElementById('num')
const simbolos = document.getElementById('simb')

const sim = '!@#$%&*()_+<>,./|:'
const num = '0123456789'
const min = 'abcdefghijklmnopqrstuvxywz'
const mai = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'

gerar.addEventListener('click', function(){
    let senha;
    
for(let i = 1; i < caracteres.value; i++){
    let senhaAleatoria = Math.floor(Math.random() * num.length)
    senha += num.charAt(senhaAleatoria)
    recebe.textContent = senha 
    console.log(senha)
}
});

