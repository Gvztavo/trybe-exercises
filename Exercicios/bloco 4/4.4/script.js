let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',

    obj:{
        personagem:'Tio Patinhas',
        origem:'Christmas on Bear Mountain, Dell s Four Color Comics #178',
        nota:'O último MacPatinhas',
        recorrente:'Sim',
    }
};

for( let key in info.obj){
    console.log(info[key],info.obj[key])
}
//   console.log('Bem-vinda, '+ info.personagem)



//   for (let key in info){
//       console.log(key)
//   }
  
//   for(let keyy in info){
//       console.log(info[keyy])
//   }
  