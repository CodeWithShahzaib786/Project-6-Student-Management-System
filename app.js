#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(10000 + Math.random() * 20000);
let myBalance = 0;
let answers = await inquirer.prompt([{
        name: "student",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please Enter a non-empty value.";
            }
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course you want to enroll:",
        choices: ["HTML", "CSS", "Typescript", "Python", "AI"]
    }
]);
let tution_fee = {
    "HTML": 2000,
    "CSS": 2000,
    "Typescript": 4000,
    "Python": 5000,
    "AI": 8000,
};
console.log(`\nTuition Fee: ${tution_fee[answers.courses]}/-\n`);
console.log(`Balance: ${myBalance}`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your payment method:",
        choices: ["Bank Transfer", "Easypaisa", "Jazz cash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please Enter a non-empty value.";
            }
        },
    }
]);
console.log(`\n You select payment method: ${paymentType.payment}\n`);
let tutionFees = tution_fee[answers.courses];
let paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation you have successfully enrolled in ${answers.courses}\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"],
        }
    ]);
    if (ans.select === "View Status") {
        console.log("********VIEW STATUS********");
        console.log(`Student Name : ${answers.student}`);
        console.log(`Student ID : ${randomNumber}`);
        console.log(`Course : ${answers.courses}`);
        console.log(`Student Name : ${answers.student}`);
        console.log(`Tution Fees Paid : ${paymentAmount}`);
        console.log(`Balance : ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Exit student management system");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
