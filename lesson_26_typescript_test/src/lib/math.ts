export const sum = (a: number, b: number) => a + b;

export const conditionalSum = (a: string | number, b: number) => {
  if (typeof a === "string") {
    return Number(a) + b;
  }
  return a + b;
};

export const conditionalReturn = (obj: any, key: string) => {
  obj && obj[key] ? obj[key] : undefined;
};

export const reverseNum = (num: number | string) => {
  num = num + "";
  return Number(num.split("").reverse().join(""));
};

export const alphabetOrder = (str: string) => {
  return str.split("").sort().join("");
};

export const convertUppercase = (str: string) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};
