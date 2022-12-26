const ulGen = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulGen.length}`);

ulGen.forEach((item) => {
    const title = item.firstElementChild.textContent;

    const elements = item.lastElementChild.children.length;

    console.log('Categori:', title);
    console.log('Elements:', elements);

});
