// make function which filter number greater then 10;
function filterNumber(arr: number[]): number[] {
    return arr.filter(val => val > 10);
}
console.log(filterNumber([5, 10, 15, 20, 25, 30])); // [15, 20, 25, 30]
