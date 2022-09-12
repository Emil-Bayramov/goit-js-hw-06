const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach( part => {
//   console.log(`part name: ${part}`)
  
// })

// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;


const listRef = document.querySelector('ul');

for (const ing of ingredients) {
  const item = document.createElement('li');
  item.textContent = ing;
  item.classList.add('item');
  listRef.append(item);
}