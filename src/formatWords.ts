import { Word } from ".";

export const formatWord = (word: string, flag: string) => {
  const sanitizedWord = word.replace(/[^\w ]/g, "");
  return `${sanitizedWord} ${flag}`;
};

export const formatWords = (words: Word) => {
  const { spanish, english } = words;
  return {
    spanish: formatWord(spanish, "🇪🇸"),
    english: formatWord(english, "🇬🇧"),
  };
};
