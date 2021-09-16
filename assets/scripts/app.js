class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>
        `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://th.bing.com/th/id/OIP.uxPz9GU--6WQ-tpJFo7MlQHaHZ?pid=ImgDet&rs=1",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://th.bing.com/th/id/R.957946297cca292a3aeff2eedf19aeb3?rik=T%2fD6n7fqwcS6nA&pid=ImgRaw&r=0",
      "A carpet which you may like or not",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod)
      prodList.append(productItem.render());
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
