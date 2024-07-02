import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright(" CODE WITH SAHAR"));


console.log(chalk.bold.cyanBright.underline(" \n WORD COUNTER\n"));

console.log("=".repeat(60));

let answer= await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"ENTER A SENTENCE"
}])
let words= answer.sentence.trim().split(" ")




console.log(chalk.bold(`. sentence words`));

console.log(words);

console.log("=".repeat(60));
console.log(chalk.blueBright.bold(`thanks for playing my word counter`));



