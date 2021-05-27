/* Exercicio .1 */
let a = 3;
let b =  9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


/* Exercicio .2 */
let a = 3;
let b = 6;

if (a > b){
    console.log('A é maior que B')
}
else{
    console.log('B é maior que A')
} 

/* Exercicio .3 */
let a = 3;
let b = 4;
let c = 8;
 
if (a>b && a>c){
    console.log ('Letra A tem o maior numero!')
}else if (b>a && b>c){
    console.log ('Letra B tem o maior numero!')
} else {
    console.log('Letra C tem o maior numero')
}

/* Exercicio .4 */
let a = 1;

switch (a){
    case 1 :
        console.log(true);
        break;

        case 2 :
            console.log(false);

            break;

            default:
                console.log('Codigo nao reconhecido')

            }

/* Exercicio .5 */

let a = 10 ;
let b = 100;
let c = 70;

let d = a + b + c;

if (d == 180){
    console.log(true);
}
else {
    console.log (false)
}