'use strict';

const fs = require('fs');

export function upgF35(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 1000;

  if(money + 200 < cost) {
    console.log(`\r\nYou cant spend money on upgrade/buying if the cost(${cost}$) + 200$ is more than your current money`)
  } else {
    myData[3] == 1
      ? myData[3] = 2
      : myData[3] = 3;

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to upgrade your F35 fighters to level ${myData[3]}`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
