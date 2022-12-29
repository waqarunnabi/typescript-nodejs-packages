#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
async function welcome() {
    let title = chalkAnimation.rainbow("Welcome to Calculator App");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    title.stop();
}
async function askQ() {
    await inquirer.prompt([
        {
            type: 'list',
            name: 'operator',
            message: 'What do you want to do?',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: 'input',
            name: 'firstNum',
            message: 'Enter the first number',
        },
        {
            type: 'input',
            name: 'secondNum',
            message: 'Enter the second number',
        }
    ]).then(answers => {
        if (answers.operator == 'Addition') {
            console.log(chalk.greenBright(`${answers.firstNum} + ${answers.secondNum} = ${parseInt(answers.firstNum) + parseInt(answers.secondNum)}`));
        }
        else if (answers.operator == 'Subtraction') {
            console.log(chalk.greenBright(`${answers.firstNum} - ${answers.secondNum} = ${parseInt(answers.firstNum) - parseInt(answers.secondNum)}`));
        }
        else if (answers.operator == 'Multiplication') {
            console.log(chalk.greenBright(`${answers.firstNum} x ${answers.secondNum} = ${parseInt(answers.firstNum) * parseInt(answers.secondNum)}`));
        }
        else if (answers.operator == 'Division') {
            console.log(chalk.greenBright(`${answers.firstNum} / ${answers.secondNum} = ${parseInt(answers.firstNum) / parseInt(answers.secondNum)}`));
        }
    });
}
// askQ();
async function restart() {
    await askQ();
    await inquirer.prompt([
        {
            type: 'input',
            name: 'restart',
            message: 'Do you want to Continue? Please type y or n',
        }
    ]).then(answers => {
        if (answers.restart == "y" || answers.restart == "yes" || answers.restart == "Y" || answers.restart == "Yes" || answers.restart == "YES") {
            restart();
        }
        else if (answers.restart == "n" || answers.restart == "no" || answers.restart == "N" || answers.restart == "No" || answers.restart == "NO") {
            console.log(chalk.redBright("Goodbye!"));
        }
        else {
            console.log(chalk.redBright("Goodbye!"));
        }
    });
}
async function restartNew() {
    await askQ();
    await inquirer.prompt([
        {
            type: 'list',
            name: 'restartNew',
            message: 'Do you want to Continue? Please Select y or n',
            choices: ['y', 'n']
        }
    ]).then(answers => {
        if (answers.restartNew == "y") {
            restartNew();
        }
        else if (answers.restartNew == "n") {
            console.log(chalk.redBright("Goodbye!"));
        }
        else {
            console.log(chalk.redBright("Goodbye!"));
        }
    });
}
await welcome();
// restart();
restartNew();
