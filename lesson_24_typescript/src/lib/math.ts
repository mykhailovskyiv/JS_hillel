export const sum = (a: number, b: number) => a + b;

export const conditionalSum = (a: string | number, b: number) => {
  if (typeof a === "string") {
    return Number(a) + b;
  }
  return a + b;
};

export const conditionalReturn = (obj: any, key: string) =>
  obj && obj[key] ? obj[key] : undefined;
