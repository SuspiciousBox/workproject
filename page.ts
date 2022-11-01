import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default function Page() {
  //Regex
  const re = /([\w']+)-?([\w']+)?/gm;

  //read file content as utf-8 string

  const file = readFileSync("./test.txt").toString("utf-8");

  // all valid word matches
  const matches = Array.from(file.matchAll(re)).filter((m) => !!m);

  // map of: word => count
  const counter = matches.reduce((r, word) => {
    const lc = word[0].toLowerCase();

    if (!r[lc]) r[lc] = 1;
    else r[lc] += 1;

    return r;
  }, {} as Record<string, number>);

  // array of output lines
  const output = [
    "word: count\n",
    ...Object.entries(counter)
      .map(([word, count]) => `${word}:${count}`)
      .sort(),
  ];

  //Write Output to a file
  writeFileSync(join(__dirname, "output.txt"), `${output.join("\n")}\n`);
}
