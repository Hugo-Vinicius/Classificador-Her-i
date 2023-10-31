const readlineSync = require('readline-sync');
let nomeHeroi = readlineSync.question("Qual o nome do seu Herói?");
let classeHeroi = readlineSync.question("Qual o nível de XP de " + nomeHeroi);


switch (true) {
case classeHeroi < 1000:
console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro")
break;

case 'classeHeroi < 1001 || classeHeroi < 2000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze")
break;

case 'classeHeroi < 2001 || classeHeroi < 5000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Prata")
break;

case 'classeHeroi < 5001 || classeHeroi < 7000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro")
break;

case 'classeHeroi < 7001 || classeHeroi < 8000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Platina")
break;

case 'classeHeroi < 8001 || classeHeroi < 9000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente")
break;

case 'classeHeroi < 9001 || classeHeroi < 10000':
console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal")
break;

case 'classeHeroi >= 10001':
console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante")
break;

}
