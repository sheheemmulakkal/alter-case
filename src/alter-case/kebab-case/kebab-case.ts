export const toKebabCase = (data: string) => {
  if (typeof data !== "string") {
    throw new Error(`Value must be string, but received ${typeof data}`);
  }

  let trimmedString = data.trim();
  if (trimmedString === "") return "";

  const splittedWords = data.split(" ");
  return splittedWords.join("-");
};
