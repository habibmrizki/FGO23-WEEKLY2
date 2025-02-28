import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { consola } from "consola";
import { runTask1 } from "./src/task1.js";
import { runTask2 } from "./src/task2.js";
import { runTask3 } from "./src/task3.js";
import { runTask4 } from "./src/task4.js";
import { runTask5 } from "./src/task5.js";
import { askForOperation as runTask6 } from "./src/task6.js";

const rl = readline.createInterface({ input, output });

async function showMenu() {
  consola.info("\nSelect the task you want to run:");
  consola.info("1. Fetch Data");
  consola.info("2. Get Data From Server");
  consola.info("3. Get Data From API");
  consola.info("4. Palindrom and Reverse Word");
  consola.info("5. Divide and Sort");
  consola.info("6. Program File");
  consola.info("7. Exit");
}

async function askForTask() {
  const choice = await rl.question("Enter your choice: ");
  consola.info("Loading...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  switch (choice) {
    case "1":
      await runTask1();
      break;
    case "2":
      await runTask2();
      break;
    case "3":
      await runTask3();
      break;
    case "4":
      runTask4();
      break;
    case "5":
      runTask5();
      break;
    case "6":
      await runTask6(rl);
      break;
    case "7":
      rl.close();
      return;
    default:
      consola.warn("Invalid option!");
  }
  await showMenu();
  await askForTask();
}

showMenu();
askForTask();

rl.on("close", () => {
  consola.success("Thank you for using the app!");
  process.exit(0);
});
