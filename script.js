
const recebe = document.getElementById('recebe');
const gerar = document.querySelector('#btn');
const maiuscula = document.getElementById('mai');
const minuscula = document.getElementById('min');
const numeros = document.getElementById('num');
const simbolos = document.getElementById('simb');

const sim = ['!', '@', '#', '$', '%', ',', '.', '&', '*', '(', ')', '[', ']', '{', '}', '~', '^', '+', '=']
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z']
const mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z']

gerar.addEventListener('click', function(){

if(maiuscula.checked){
    alert('teste')
}

});
