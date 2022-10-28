import * as fs from "fs";

export default function Page(): void {
  const re = /apples/gi;
  const words = fs.readFileSync("./test.txt", "utf8");
  const arrayWords = Array.from(words);

  if (words.search(re) == -1) {
    console.log("Does not contain Apples");
  } else {
    console.log("Contains Apples");
  }

  console.log(arrayWords);
  // let sortedWords= arrayWords.sort()
}
