let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma= 0;

for(let i in numbers){
    soma += numbers[i];
    
}
console.log(soma)

let div = soma/10;

console.log(div)

if (div >= 20){
    console.log("valor maior que 20")
}
else{
    console.log("valor menor ou igual a 20")
}

let maiorNumero=0;

for(let i =0; i<numbers.length;i++){
    
    if(numbers[i] > maiorNumero){
        maiorNumero= numbers[i];
    }
}

console.log(maiorNumero);

let impar=[];
let resto=0;

for(let i =0; i<numbers.length;i++){
    resto = numbers[i] %2;
    if(resto !== 0){
        impar.push(numbers[i]);
    }
}
console.log(impar);

let menorNumero= 9999;

for(let i =0; i<numbers.length;i++){
    
    if(numbers[i] < menorNumero){
        menorNumero= numbers[i];
    }
}
console.log(menorNumero);