#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "enter pin number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin number!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "select your option",
      choices: ["withdraw", "check balance"],
    },
  ]);
  console.log(operationAns);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    myBalance -= amountAns.amount;
    if (amountAns.amount <= myBalance) {
      console.log("your remaining balance is: " + myBalance);
    } else console.log("insufficient balance");
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
  }
} else {
  console.log("invalid pin number");
}
