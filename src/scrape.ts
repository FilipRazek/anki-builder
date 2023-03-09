import axios from "axios";
import { load, CheerioAPI, Element } from "cheerio";
import { Word } from "./index.js";

const VOCAB_URL =
  "https://strommeninc.com/1000-most-common-spanish-words-frequency-vocabulary/";

const getWordsFromRow = ($: CheerioAPI, row: Element): Word => {
  const [_, spanish, english] = $(row)
    .find("td")
    .map((_, el) => $(el).text().trim())
    .get();
  return { spanish, english };
};

const getWordsFromHtml = (data: any, limit: number) => {
  const $ = load(data);
  const vocabularyRows = $("table tr").slice(1, limit + 1);
  const vocabulary = vocabularyRows
    .map((_, row) => getWordsFromRow($, row))
    .get();

  return vocabulary;
};

export const scrapeVocabulary = async (limit = 1000) => {
  const { data } = await axios.get(VOCAB_URL);
  return getWordsFromHtml(data, limit);
};
