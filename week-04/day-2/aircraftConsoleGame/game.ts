import Carrier from "./Classes/Carrier";
import F16 from "./Classes/F16";
import F16lvl1 from "./Classes/F16lvl1";
import F35lvl1 from "./Classes/F35lvl1";
import F16lvl2 from "./Classes/F16lvl2";
import F35lvl2 from "./Classes/F35lvl2";
import F16lvl3 from "./Classes/F16lvl3";
import F35lvl3 from "./Classes/F35lvl3";

'use strict';
const fs = require('fs');

process.argv.forEach(e => {
  console.log(e);  
});

let check: string[] = ['-fight', '-upgShield', '-upgF16', '-upgF35', '-newGame', '-status', '-upgHangar', '-buyF16', '-buyF35', '-repair'];

let myData: any[] = fs.readFileSync('./gameData/myCarrier.txt', 'uft-8').split(';');
let enemyData: any[] = fs.readFileSync(`./gameData/enemy${myCarrier[2]}.txt`, 'utf-8').split(';');

let myCarrier: Carrier = new Carrier(myData[0]);
let enemyCarrier: Carrier = new Carrier(enemyData[0]);

let money: number = myData[6];
const tempMoney: number = money;

enemyData[1].split('_').forEach(e => {
  enemyData[2] === 1
    ? e === 'F16'
      ? enemyCarrier.add(new F16lvl1(10))
      : enemyCarrier.add(new F35lvl1(14))
    : enemyData[2] === 2
      ? e === 'F16'
        ? enemyCarrier.add(new F16lvl2(10))
        : enemyCarrier.add(new F35lvl2(14))
      : e === 'F16'
        ? enemyCarrier.add(new F16lvl3(10))
        : enemyCarrier.add(new F35lvl3(14));
});

myData[1].split('_').forEach(e => {
  e.split(',')[0] === 'F16'
    ? myData[2] === 1
      ? myCarrier.add(new F16lvl1(e.split(',')[1]))
      : myData[2] === 2
        ? myCarrier.add(new F16lvl2(e.split(',')[1]))
        : myCarrier.add(new F16lvl3(e.split(',')[1]))
    : myData[2] === 1
    ? myCarrier.add(new F35lvl1(e.split(',')[1]))
    : myData[2] === 2
      ? myCarrier.add(new F35lvl2(e.split(',')[1]))
      : myCarrier.add(new F35lvl3(e.split(',')[1]));
});

if (process.argv[2] === undefined) {
  console.log('Game description')
}

if (process.argv[2] === '-fight') {
  money = myCarrier.fill(money);
  console.log(`You spent ${tempMoney - money}$ on refill your Aircrafts\r\n`)
  
  console.log('Your figthers:')
  let dmgToEnemy: number = myCarrier.fight(enemyCarrier);
  
  console.log('Enemy fighters:')
  let dmgToMe: number = enemyCarrier.fight(myCarrier);
  
  console.log(`You dealt: ${dmgToEnemy} damage to the enemy Carrier.\r\nIt has ${enemyCarrier.health} health left\r\n`);
  console.log(`The enemy dealt: ${dmgToMe} damage to your Carrier.\r\nIt has ${myCarrier.health} health left\r\n`);

}
if (process.argv[2] === '-upgShield') {
  console.log('Shield upgraded method')
}
if (process.argv[2] === '-upgF16') {
  console.log('Fight method')
}
if (process.argv[2] === '-upgF35') {
  console.log('Fight method')
}
if (process.argv[2] === '-newGame') {
  console.log('Fight method')
}
if (process.argv[2] === '-status') {
  console.log('Fight method')
}
if (process.argv[2] === '-upgHangar') {
  console.log('Fight method')
}
if (process.argv[2] === '-buyF16') {
  console.log('Fight method')
}
if (process.argv[2] === '-buyF35') {
  console.log('Fight method')
}
if (process.argv[2] === '-repair') {
  console.log('Fight method')
}
if (check.indexOf(process.argv[2]) === -1) {
  console.log('wrong method')
}


