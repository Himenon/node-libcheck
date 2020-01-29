import commander from "commander";

export interface InputParams {
  inputYarnLockPath: string;
  outputFilename: string | undefined;
  checkPattern: string | undefined;
  html: string | undefined;
}

export const getInputParams = (): InputParams => {
  commander
    .option("-i --input <yarn.lock>", "input yarn.lock file")
    .option("-o --output <output.json>", "output filename.")
    .option("--html <output.html>", "output html filename.")
    .option("-p --pattern <check pattern>", "pattern")
    .parse(process.argv);

  return {
    inputYarnLockPath: commander["input"],
    outputFilename: commander["output"],
    checkPattern: commander["pattern"],
    html: commander["html"],
  };
}