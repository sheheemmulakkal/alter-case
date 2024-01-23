export const toSentenceCase = (data: string) => {
  if (typeof data !== "string") {
    throw new Error(`Value must be string, but received ${typeof data}`);
  }

  const trimmedString = data.trim();
  if (trimmedString === "") {
    return "";
  }

  const splittedString = trimmedString.split(".");

  let paragraph = "";
  for (let i = 0; i < splittedString.length; i++) {
    const trimmedSentence = splittedString[i].trim();
    if (trimmedSentence.length === 1) {
      paragraph += " " + trimmedSentence;
    } else if (trimmedSentence.length === 0) {
      paragraph += ".";
    } else {
      let firstLetter = trimmedSentence[0];
      let restOfSentence = trimmedSentence.slice(1);
      paragraph += " " + firstLetter.toUpperCase() + restOfSentence;
      if (splittedString[i + 1] || splittedString[splittedString.length - 1]) {
        paragraph += ".";
      }
    }
  }

  return paragraph.trim();
};
