const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://th.bing.com/th/id/OIP.uxPz9GU--6WQ-tpJFo7MlQHaHZ?pid=ImgDet&rs=1",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://th.bing.com/th/id/R.957946297cca292a3aeff2eedf19aeb3?rik=T%2fD6n7fqwcS6nA&pid=ImgRaw&r=0",
      price: 19.99,
      description: "A carpet which you may like or not",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
          <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
          </div>
          </div>
          `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render()