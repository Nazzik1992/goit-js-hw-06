const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientEL = document.getElementById("ingredients");
const list = ingredients.map((item) => {
  const itemList = document.createElement("li");
  itemList.textContent = item;
  return itemList;
  });
  ingredientEL.append(...list); 