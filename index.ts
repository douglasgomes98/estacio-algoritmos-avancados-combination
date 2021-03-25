import readline from "readline";

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function mountNumbers(input: string) {
  const numbers: number[] = [];

  const inputValues = input.split(",");

  inputValues.map(
    (value) =>
      (value === "1" || value === "0") &&
      value.length === 1 &&
      numbers.push(Number(value))
  );

  return numbers;
}

terminal.question(
  "Enter some comma-separated numbers to generate a combination: ",
  (numbersInput: string) => {
    const numbersMap: number[] = mountNumbers(numbersInput);

    console.log(numbersMap);

    terminal.close();
  }
);

terminal.on("close", () => {
  process.exit(0);
});
