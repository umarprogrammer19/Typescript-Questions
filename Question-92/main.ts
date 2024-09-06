// make function which removes the last element from an array and returns it
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}

const fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']