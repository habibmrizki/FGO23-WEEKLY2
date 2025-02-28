const divideAndSort = (number) => {
  if (typeof number !== "number") return "inputan harus berupa number";
  let stringNumber = String(number);
  let result = stringNumber
    .split("0")
    .map((num) => num.split("").sort().join(""))
    .join("");

  return Number(result);
};

export const runTask5 = () => {
  console.log(divideAndSort(5956560159466056));
};
