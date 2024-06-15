import inquirer from "inquirer";
import chalk from "chalk";
let currentBalance = 5000;
console.log(chalk.yellowBright(`Your Current Balance is ${currentBalance}$`));
const input = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.blue("Enter your Pin number")
});
if (input.pin === 4554) {
    const nextStep = await inquirer.prompt({
        name: "next",
        type: "list",
        message: chalk.green("What you want to do?"),
        choices: ["Withdraw", "Check Balance"]
    });
    if (nextStep.next === "Withdraw") {
        const enter = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: chalk.cyan("Enter amount")
        });
        let final = currentBalance - enter.amount;
        console.log(chalk.yellowBright(`Now Your current balance is ${final}$`));
    }
    else if (nextStep.next === "Check Balance") {
        console.log(chalk.yellowBright(`Your current balance is ${currentBalance}$`));
    }
}
else {
    console.log(chalk.redBright("Incorrect Pin Number"));
}
