import inquirer from "inquirer";



interface vartype{
    userid: string,
    userpin:number,
    acctype: string,
    options: string,
    amount: number
    balance: number

}
    
let balance = Math.floor(Math.random() * 100000);
// let balance = 100000;

let userip: vartype  = await inquirer.prompt([

    {
        name: "userid",
        type: "input",
        message: "Enter your User ID:   "
    },
    {
        name: "userpin",
        type: "password",
        message: "Enter your PIN:   ",
        when(answers) {
            return answers.userid;
        }
    },
    {
        name: "acctype",
        type: "list",
        message: "Select your account type: ",
        choices: ["Savings", "Current", "Fixed Deposit"],
        when(answers) {
            return answers.userpin;
        }

    },
    {
        name: "options",
        type: "list",
        message: "Select your option:   ",
        choices: ["Fast Cash","Balance Enquiry", "Cash Withdraw"],
        when(answers) {
            return answers.acctype;
        }
    },

    {
        name: "amount",
        type: "list",
        message: "Select your option:   ",
        choices: [1000, 2000, 5000, 10000, 20000],
        when(answers) {
            // return answers.options.includes("Fast Cash");
            return answers.options == "Fast Cash";
        }
    },

    {
        name: "amount",
        type: "number",
        message: "Enter your amount:    ",
        when(answers) {
            // return answers.options.includes("Fast Cash");
            return answers.options == "Cash Withdraw";
        },
    }

])

if(userip.userid && userip.userpin){
    const enteredamount = userip.amount;

    if(userip.options == "Balance Enquiry"){
        console.log("Your current balance is: ", balance);
    }

    else if(userip.amount < balance){
        const remaianingbal = balance - userip.amount;
        console.log("Your transaction is successful, Previous balance: ", balance);
        console.log("Your current balance is: ", remaianingbal);
    }
    else{
        console.log("Insufficient balance");
    }

}