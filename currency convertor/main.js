import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.cyanBright(`heyy...`));
let exchang_rates = {
    "USD": 1,
    "EUR": 0.9,
    "jyp": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
};
const user_answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }, {
        name: "to",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter the amount to convert:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }
]);
let from_amount = exchang_rates[user_answer.from];
let to_amount = exchang_rates[user_answer.to];
let amount = user_answer.amount;
// console.log(from_amount);
// console.log(to_amount);
// console.log(amount);
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount: ${converted_amount}`);
