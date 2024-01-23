export const toTitleCase = (data: string) => {
  if (typeof data !== "string") {
    throw new Error(`Value must be string, but received ${typeof data}`);
  }

  const trimmedString = data.trim();

  if (trimmedString === "") {
    return "";
  }

  const splitedString = trimmedString.split(" ");
  let result = "";

  for (let word of splitedString) {
    if (word.length === 1) {
      result += word.toUpperCase() + " ";
    } else {
      const firstLetter = word.charAt(0);
      const restOfLetters = word.substring(1);
      result += firstLetter.toUpperCase() + restOfLetters.toLowerCase() + " ";
    }
  }

  return result.trim();
};
