// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// В результате, в консоли будут выведены такие сообщения.

const navlist = document.querySelector("#categories");
console.log(`Number of categories: ${navlist.children.length} `);

const navItem = document.querySelectorAll(".item h2");
navItem.forEach((element) => {
  console.log(" ");
  console.log(`Category: ${element.textContent}`);

  console.log(
    `Elements: ${element.nextElementSibling.children.length}`
  );
});