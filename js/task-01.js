"use strict";

const categoriesList = document.querySelectorAll('.item')
console.log(`Number of categories : ${categoriesList.length}`)

categoriesList.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    const el = element.querySelectorAll('li')
    console.log(`Elements: ${el.length}`)
});