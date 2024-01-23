export const toLowerCase = (data: string) => {
  if (typeof data !== "string") {
    throw new Error(`Value must be string, but received ${typeof data}`);
  }
  return data.toLowerCase();
};
