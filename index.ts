import readline from "readline";

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

terminal.question("Enter some comma-separated numbers to generate a combination: ", (numbers: string) => {
  console.log('numbers ', numbers);
  
  terminal.close();
});

terminal.on("close", () => {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
