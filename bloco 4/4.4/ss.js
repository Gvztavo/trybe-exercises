function verificaPalindromo(palavras) {
    palindromo = palavras.split("").reverse().join("");
    return (palindromo == palavras) ? true : false;
}

console.log(verificaPalindromo('asa'));
console.log(verificaPalindromo('natan'));
console.log(verificaPalindromo('gustavo'));
console.log(verificaPalindromo('ana'));
console.log(verificaPalindromo('luneta'));


function maiorCaracteres (){
let ar = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome= [];

for( let i=0;i<ar.length;i++){
 maiorNome.push(ar[i].length)

}

var maior = 0;
for (var i = 0; i < maiorNome.length; i++) {
   if ( maiorNome[i] > maior ) {
      maior = maiorNome[i];
   }
}

return maior;
}
console.log(maiorCaracteres())



let n = 5;
let soma=0; 

for(let i=0; i<=n ;i++){
     soma += i;
}
console.log(soma);