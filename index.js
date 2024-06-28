#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.white.underline("\n\tWellcome to Ghulam Ahmad 'Adventure Game'\n"));
// Classes player and opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueulDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueulDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//Player name and select opponent
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Pleaes enter your name:",
    },
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Please select your opponent:",
        choices: ["Skeleton", "Zombie", "Assassin"],
    },
]);
// Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would like to next?",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("\tYou Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`\n\tYou drink potion you fuel is ${p1.fuel}\n`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would like to next?",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("\tYou Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`\n\tYou drink potion you fuel is ${p1.fuel}\n`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "What would like to next?",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueulDecrease();
                console.log(chalk.bold.red(`\n\t${o1.name} Fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`\t${p1.name} Fuel is ${p1.fuel}`));
                console.log(`\t\n${"=".repeat(40)}\n`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("\tYou Win\n"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`\n\tYou drink potion you fuel is ${p1.fuel}\n`));
        }
        if (ask.option === "Run For Your Life...") {
            console.log(chalk.red.bold.italic("\n\tYou lose better luck next time..\n"));
            process.exit();
        }
    }
} while (true);
