#! /usr/bin/env node

//importing inquirer and chalk

import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull welcome message
console.log(chalk.bold.magentaBright("\n \t\t Welcome to Saba's Programme- Word Counter"));
console.log("=".repeat(60));

//Prompt a user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

//Trimming a sentence and splitting it into word based "spaces"

let words = answers.sentence.trim().split(" ");

//analysis the user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.blueBright(words.length)}`));
console.log("=".repeat(60));
