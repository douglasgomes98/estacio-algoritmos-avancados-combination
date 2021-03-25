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

function generateCombinations(values: number[]) {
  const numbersCombined: Set<string> = new Set();

  if (values.length === 0 || values.length === 1) {
    return numbersCombined;
  }

  if (values.length === 2) {
    for (let indexX = 0; indexX < values.length; indexX++) {
      for (let indexY = 0; indexY < values.length; indexY++) {
        const element = `${values[indexX]}${values[indexY]}`;
        numbersCombined.add(element);
      }
    }

    return numbersCombined;
  }
}

const numbersMap: number[] = mountNumbers("1,0,1");

console.log(generateCombinations(numbersMap)?.values());

// terminal.question(
//   "Enter some comma-separated numbers to generate a combination: ",
//   (numbersInput: string) => {
//     const numbersMap: number[] = mountNumbers(numbersInput);

//     console.log(generateCombinations(numbersMap)?.values());

//     terminal.close();
//   }
// );

// terminal.on("close", () => {
//   process.exit(0);
// });
