'use strict';

const fs = require('fs');

export function buyF35(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 3000;
  
  myData[1] === ''
    ? myData[1] += 'F35,0'
    : myData[1] += '_F35,0';

  money -= cost;

  console.log(`\r\nYou just spent ${tempMoney - money}$ to buy an F35 fighter`)
  
  fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'))
}