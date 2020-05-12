function anything(a: number | string, b: number) {
  return Number(a) + b;
}

anything(5, 2);

const obj = {
  a: "string",
};

function takeObj(obj: { a: string }) {
  console.log(obj.a);

  takeObj(obj);
}
