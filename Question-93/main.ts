// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBanana(fruits: string[]): void {
    const index: number = fruits.indexOf("Banana");
    index !== -1 ? fruits[index] = "Mango" : null; // Condition
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBanana(fruits);
console.log(fruits);
