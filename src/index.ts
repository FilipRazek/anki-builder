import { formatWords } from "./formatWords.js";
import { scrapeVocabulary } from "./scrape.js";
import { writeWordsToFile } from "./writeWordsToFile.js";

export type Word = { spanish: string; english: string };

const WORDS_TO_LEARN = 300;
const vocabulary = await scrapeVocabulary(WORDS_TO_LEARN);
const formattedVocabulary = vocabulary.map(formatWords);
writeWordsToFile(formattedVocabulary, "anki.txt");
