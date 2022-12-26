const ulGen = document.getElementById("categories");
console.log(`Number of categories: ${ulGen.children.length}`);

const title = ulGen.querySelectorAll('h2');
const el = ulGen.querySelectorAll('ul');

console.log(`Category: ${title[0].textContent}`);
console.log(`Elements: ${el[0].children.length}`);

console.log(`Category: ${title[1].textContent}`);
console.log(`Elements: ${el[1].children.length}`);

console.log(`Category: ${title[2].textContent}`);
console.log(`Elements: ${el[2].children.length}`);

