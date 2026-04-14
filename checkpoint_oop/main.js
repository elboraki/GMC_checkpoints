class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      return;
    }

    this.items.push(new ShoppingCartItem(product, quantity));
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  displayCart() {
    if (this.items.length === 0) {
      console.log("The shopping cart is empty.");
      return;
    }

    console.log("Shopping Cart:");
    this.items.forEach((item) => {
      console.log(
        `${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()}`
      );
    });

    const totalAmount = this.items.reduce(
      (sum, item) => sum + item.getTotalPrice(),
      0
    );

    console.log(`Total items: ${this.getTotalItems()}`);
    console.log(`Total amount: $${totalAmount}`);
  }
}

// Testing the classes
const laptop = new Product(1, "Laptop", 1200);
const mouse = new Product(2, "Mouse", 25);
const keyboard = new Product(3, "Keyboard", 75);

const cart = new ShoppingCart();

console.log("Adding items to the cart...");
cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(keyboard, 1);
cart.displayCart();

console.log("\nRemoving Mouse from the cart...");
cart.removeItem(2);
cart.displayCart();
