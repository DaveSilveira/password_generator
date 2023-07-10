
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

function geraSenha(){
    
}

gerar.addEventListener('click', function(){
    let senha;
    if(maiuscula.checked){
        for(let i = 0; i < caracteres.value; i++){
            let senhaAleatoria = Math.floor(Math.random() * mai.length)
            senha += mai.charAt(senhaAleatoria)
            recebe.textContent = senha 
        }
    }if(minuscula.checked){
        for(let i = 0; i < caracteres.value; i++){
            let senhaAleatoria = Math.floor(Math.random() * min.length)
            senha += min.charAt(senhaAleatoria)
            recebe.textContent = senha 
        }
    }if(numeros.checked){
        for(let i = 0; i < caracteres.value; i++){
            let senhaAleatoria = Math.floor(Math.random() * num.length)
            senha += num.charAt(senhaAleatoria)
            recebe.textContent = senha 
        }
    }if(simbolos.checked){
        for(let i = 0; i < caracteres.value; i++){
            let senhaAleatoria = Math.floor(Math.random() * sim.length)
            senha += sim.charAt(senhaAleatoria)
            recebe.textContent = senha 
        }
    }

});

