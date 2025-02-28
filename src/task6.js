import fs from "node:fs";
import path from "node:path";
import { consola } from "consola";

const dataDir = path.join("./data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  consola.success("Successfulliy create a data directory");
}

function showMenu() {
  consola.info("\nSelect the operation you want to perform:");
  consola.info("1. Add Data");
  consola.info("2. View File Name");
  consola.info("3. Delete Data");
  consola.info("4. Exit");
}

async function addData(rl) {
  const fileName = await rl.question("Enter a file name: ");
  const content = await rl.question("Insert file content: ");
  const filePath = path.join(dataDir, `${fileName}.txt`);
  fs.writeFileSync(filePath, content);
  consola.info(`File ${fileName}.txt successfully added!`);
  await askForOperation(rl);
}

async function viewFileNames(rl) {
  const files = fs.readdirSync(dataDir);
  if (files.length === 0) {
    consola.info("No files available.");
  } else {
    consola.info("Available File Names:");
    files.forEach((file, index) => {
      const fileNameWithoutExt = path.parse(file).name;
      consola.info(`${index + 1}. ${fileNameWithoutExt}`);
    });
  }
  await askForOperation(rl);
}

async function deleteData(rl) {
  const files = fs.readdirSync(dataDir);
  if (files.length === 0) {
    consola.info("No files available.");
  } else {
    consola.info("Available File Names:");
    files.forEach((file, index) => {
      const fileNameWithoutExt = path.parse(file).name;
      consola.info(`${index + 1}. ${fileNameWithoutExt}`);
    });
    const fileNumber = await rl.question("Select the file number to delete: ");
    const selectedFile = files[fileNumber - 1];
    const filePath = path.join(dataDir, selectedFile);
    fs.unlinkSync(filePath);
    if (filePath.length === 0) {
      consola.warn("asdasdasd");
    }
    consola.success(`File ${selectedFile} successfully deleted!`);
  }
  await askForOperation(rl);
}

export async function askForOperation(rl) {
  showMenu();
  const choice = await rl.question("Enter your choice: ");
  switch (choice) {
    case "1":
      await addData(rl);
      break;
    case "2":
      await viewFileNames(rl);
      break;
    case "3":
      await deleteData(rl);
      break;
    case "4":
      rl.close();
      break;
    default:
      consola.warn("Invalid option!");
      await askForOperation(rl);
  }
}
