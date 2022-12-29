#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';


async function welcome() {

    let title = chalkAnimation.karaoke(`Welcome to Number Guesing Game`)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    title.stop();
    
}


async function numberguess() {

let comNum = Math.floor(Math.random() * 10);
// console.log(comNum);
let chances =3;

    for(let i=0; i<3; i++) {
       const userInp: {myNum: number} = await inquirer
        .prompt([
        { 
            name: "myNum",
            type: "number",
            message: "Guest the Number"
            }
        ]);
        if(comNum === userInp.myNum) {
            let winmsg = chalk.greenBright("You win the Game!");
            console.log(winmsg);
            break;
            restartgmae();
     }
        else {
            if(i == 2) {
                let losemsg = chalk.redBright("You lose!");
                console.log(losemsg);
            }
            else {
                chances -= 1;
                console.log(`You have only ${chances} chance remaining`);
            }
     }
    }        
}

async function restartgmae() {
    
    await numberguess();
    const restart: {restart: string} = await inquirer
    .prompt([
        { 
            name: "restart",
            type: "list",
            message: "Do you want to play again?",
            choices: ["Yes", "No"]
            }
        ]);
        if(restart.restart === "Yes") {
            numberguess();
        }
        else {
            let thanksmsg = chalk.blueBright(`Thank you for playing`)
            console.log(thanksmsg);
        }
    
}

await welcome();
await restartgmae();