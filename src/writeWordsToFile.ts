import { writeFile } from "fs/promises";
import { Word } from "./index.js";

const getLineFromWord = (word: Word) => {
  const { spanish, english } = word;
  return `${english},${spanish}`;
};

export const writeWordsToFile = async (words: Word[], fileName: string) => {
  const lines = words.map(getLineFromWord);
  const fileData = lines.join("\n");
  await writeFile(fileName, fileData);
};
