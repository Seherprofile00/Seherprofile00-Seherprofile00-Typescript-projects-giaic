#! /usr/bin/env node
import inquirer from "inquirer";
let uname1 = ["rehan", "sehar"];
let my_balance = 500000;
let my_pin = 1;
let limit1 = 5000;
let checkuname = await inquirer.prompt({
    name: "username",
    message: "Enter Username: "
});
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter ur pin",
    type: "number"
});
if (pinAnswer.pin === my_pin) {
    console.log("==============================================");
    console.log("        Authentication Sucessfull");
    console.log("    Congrulation! you sucessfully loged-in");
    console.log("  Note: your account limit: 5000 at a time ");
    console.log("==============================================");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    });
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter your amount",
            type: "number",
        });
        my_balance -= amountAns.amount;
        console.log("your remaining balance is : " + my_balance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your remaing balnce is " + my_balance);
    }
    console.log("==============================================");
    console.log("     |           Account Summary");
    console.log("     | Your account limit: " + limit1);
    console.log("     | USER-NAME: " + uname1);
    console.log("     | Total amount: " + my_balance);
    console.log("     | Note: Dont share your Details also password");
    console.log("     | Thankyou for visiting Asgari-bank");
}
else
    (console.log("𝐎𝐩𝐩𝐬..incorect pin number"),
        console.log("Try again"));
