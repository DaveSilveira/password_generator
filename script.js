
const recebe = document.getElementById('recebe')
const caracteres = document.querySelector('#caracteres')
const gerar = document.querySelector('#btn')
const maiuscula = document.getElementById('mai')
const minuscula = document.getElementById('min')
const numeros = document.getElementById('num')
const simbolos = document.getElementById('simb')

const sim = '!@#$%&*()_+<>,./|:';
const num = '0123456789';
const min = 'abcdefghijklmnopqrstuvxywz';
const mai = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

function detect2(x, y){ 
    let checks = x + y; 
    return geraSenha(checks)
}
function detect3(x, y, z){
    let checks = x + y + z;
    return geraSenha(checks)
}
function detect4(x, y, w, z){
    let checks = x + y + w +z;
    return geraSenha(checks)
}
function geraSenha(x){
    let senha = '';
    for(let i = 0; i < caracteres.value; i++){
        let senhaAleatoria = Math.floor(Math.random() * x.length)
        senha += x.charAt(senhaAleatoria)
        recebe.textContent = senha 
    }
    return senha;
}

gerar.addEventListener('click', function(){
    if(maiuscula.checked) geraSenha(mai)
    if(minuscula.checked) geraSenha(min)
    if(numeros.checked) geraSenha(num)
    if(simbolos.checked) geraSenha(sim)
    if(maiuscula.checked && minuscula.checked) detect2(mai, min)
    if(maiuscula.checked && numeros.checked) detect2(mai, num)
    if(maiuscula.checked && simbolos.checked) detect2(mai, sim)
    if(minuscula.checked && numeros.checked) detect2(min, num)
    if(minuscula.checked && simbolos.checked) detect2(min, sim)
    if(numeros.checked && simbolos.checked) detect2(num, sim)
    if(maiuscula.checked && minuscula.checked && simbolos.checked) detect3(mai, min, sim)
    if(maiuscula.checked && minuscula.checked && numeros.checked)   detect3(mai, min, num)
    if(maiuscula.checked && simbolos.checked && numeros.checked) detect3(mai, sim, num)
    if(minuscula.checked && simbolos.checked && numeros.checked) detect3(min, sim, num)
// verificar ultima condicional
    if(maiuscula.checked && minuscula.checked && simbolos.checked && numeros.checked) detect4(mai, min, sim, num)

});

