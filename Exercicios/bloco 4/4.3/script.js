let n =6;

let soma='';

// for(let i= 0; i<n; i++){
//     let soma='';

//     for(let j=0 ;j<n; j++){
//         soma+='*';
//     }
//     console.log(soma)
// }

// for(let i= 0; i<n; i++){ 
//     for(let j=0 ;j<n/n; j++){
//         soma+='*';
//     }
//     console.log(soma)
// }

for(let i= 0; i<n; i++){ 
        for(let j=0 ;j<n/n; j++){
             soma+=' ';
             if(j==n/n-1){
                 soma += '*';
             }
         }
         console.log(soma)
     }