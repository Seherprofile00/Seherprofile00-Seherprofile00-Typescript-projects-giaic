import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright.cyanBright(`\nWELLCOME TO ADVENTURE GAME\n`));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        100;
    }
}
class ooponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "please enter ur name"
    }
]);
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "SELECT YOUR WEAPON",
    choices: ["skeleton", "Alien", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new ooponent(opponent.name);
do {
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "WHAT WOULD YOU LIKE TO DO?",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name}fuel is${p1.fuel}`);
                console.log(`${o1.name}fuel is${o1.fuel}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name}fuel is ${p1.fuel}`);
                console.log(`${o1.name}fuel is ${o1.fuel}`);
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`you Drink health portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life...") {
            console.log(chalk.bold.cyanBright `you loose, better luck next time`);
            process.exit();
        }
    }
} while (true);
