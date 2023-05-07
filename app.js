let userFavNum = +prompt(`Enter a number`);
let computerFavNum = Math.round(Math.random() * 10);

if (userFavNum ===  computerFavNum){
    console.log(`Youn won`)
}else{
    console.log(`You Lose ${computerFavNum}`);
}
