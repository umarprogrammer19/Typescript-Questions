// make a funtion that converts a decimal into two decimal places
const decimal = (num:number): number => Number(num.toFixed(2));
console.log(decimal(3.12231));
