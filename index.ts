import readline from "readline";

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

function mountBytesArray(combinations: number) {
  const bytes = [1];

  for (let i = 1; i < combinations; i++) {
    const newValue = bytes[i - 1] * 2;
    bytes.push(newValue);
  }

  return bytes;
}

function generateCombinations(combinations: number) {
  const numbersCombined = new Set<string>();

  if (combinations === 0) return numbersCombined;

  const bytes = mountBytesArray(combinations);
  const variations = Math.pow(2, combinations);

  console.log(
    `you chose to generate ${combinations} combinations, with that ${variations} variations will be generated.`
  );

  for (let i = variations - 1; i >= 0; i--) {
    let currentVariation = i;
    let numberGenerated = "";

    for (let j = combinations; j > 0; j--) {
      if (bytes[j - 1] <= currentVariation) {
        currentVariation -= bytes[j - 1];
        numberGenerated = numberGenerated.concat("1");
      } else {
        numberGenerated = numberGenerated.concat("0");
      }
    }

    numbersCombined.add(numberGenerated);
  }

  return numbersCombined;
}

terminal.question(
  "how many combinations do you want to generate? ",
  (input: string) => {
    try {
      const combinations = Number(input);
      if (!combinations) throw new Error();

      const combinationsGenerated = generateCombinations(combinations);
      console.log(combinationsGenerated);
    } catch (error) {
      console.log("only numbers are accepted, please try again");
    }

    terminal.close();
  }
);

terminal.on("close", () => {
  process.exit(0);
});
