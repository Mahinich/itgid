//  Задания юнита расположены на сайте.
// const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
// console.log(goods_1);


// TASK 3
const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
console.log(goods_1);

document.querySelector('.out-3').append(goods_1.draw());

// TASK 4
const ownObj = new Goods('Casio', 100, 'https://www.dealsmagnet.com/images/casio-digital-unisex-adult-watch-ws-2100h-1a2vdf-l-17ydQHN0.jpg', 10)
console.log(ownObj);

document.querySelector('.out-4').append(ownObj.draw());
let newDiv = document.createElement('div');
newDiv.textContent = `Quantity: ${ownObj.count}`
document.querySelector('.out-4').append(newDiv);

// TASK 7
  const goods_7 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true);
  console.log(goods_7);

  document.querySelector('.out-7').append(goods_7.draw());

// TASK 11

const v12 = new Valid2('test@ua.ua', 'qwertyu');
console.log(v12.validate());
console.log(v12.isValid);
console.log(v12.error_message);
 
const v13 = new Valid2('test@ua.ua', 'qwe');
console.log(v13.validate());
console.log(v13.isValid);
console.log(v13.error_message);

const v14 = new Valid2('', 'qwertyu');
console.log(v14.validate());
console.log(v14.isValid);
console.log(v14.error_message);