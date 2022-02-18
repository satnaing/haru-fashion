export const roundDecimal = (num: number) =>
  (Math.round(num * 100) / 100).toFixed(2);
