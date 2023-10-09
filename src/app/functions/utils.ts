
export const toFixedNumber = (num: number, digits: number, base: number)=>{
  const pow = Math.pow(base ?? 10, digits);
  return Math.round(num*pow) / pow;
}

export const toFixed = (num: number, digits = 3) => toFixedNumber(num, digits, 10);