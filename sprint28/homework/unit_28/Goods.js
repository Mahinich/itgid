class Goods {
  constructor(name, price, image, count) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
  }
  draw() {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="goods">
      <h1>${this.name}</h1>
      <p class="price">${this.price}</p>
      <img src="${this.image}" alt="${this.name}">
    </div>
    `;
    
    return newDiv;
    
   /*  newDiv.setAttribute('class', 'goods');
    
    let newH1 = document.createElement('h1').innerHTML = this.name;
    
    let newP = document.createElement('p').innerHTML = this.price;    
    newP.setAttribute('class', 'price');

    let newImg = document.createElement('img');
    newImg.setAttribute('src', this.image);
    newImg.setAttribute('alt', this.name);

    newDiv.append(newH1);
    newDiv.append(newP);
    newDiv.append(newImg); */
  }
}