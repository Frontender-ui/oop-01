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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(val) {
    this.items = val;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((acc, cur) => acc + cur.price, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }
  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order New!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
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
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
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
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      prodList.append(productItem.render());
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList();
    const prodListEL = productList.render();
    renderHook.append(prodListEL);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
