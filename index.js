window.onload = function() {

  const data = groceries = [
  {
    category: "beverage",
    item: "Milk",
    brand: "Jabron",
    type: "Organic 2% Milk",
    qty: 1
  },
  {
    category: "pantry",
    item: "Farfalle",
    brand: "Micoy",
    type: "Pasta",
    qty: 3
  },
  {
    category: "pantry",
    item: "Linguini",
    brand: "Micoy",
    type: "Pasta",
    qty: 2
  },
  {
    category: "dairy",
    item: "Yogurt",
    brand: "Labels",
    type: "Plain Non-Fat Greek Yogurt",
    qty: 12
  },
  {
    category: "produce",
    item: "Apples",
    brand: "Zambony",
    type: "Honeycrisp",
    qty: 6
  },
  {
    category: "produce",
    item: "Lemons",
    brand: "KC",
    type: "Pink Variegated",
    qty: 6
  },
  {
    category: "beverage",
    item: "Water",
    brand: "Switch",
    type: "Grapefruit Sparkling Water",
    qty: 8
  },
  {
    category: "alcohol",
    item: "Vodka",
    brand: "Flamingo",
    type: "L'Orange",
    qty: 1
  }
];
  let items = "";
  for (let i = 0; i < data.length; i++) {
    items = items +
      `
      <div class="list-item" role="listitem">
        <div class="list-item-qty">QTY: ${data[i].qty}</div>
        <div>
          <div class="list-item-title heading" aria-label="${data[i].item}">${data[i].item}</div>
          <div class="list-item-subtitle">${data[i].type}</div>
        </div>
        <div class="list-item-cat">${data[i].category}</div>
      </div>
  `;
  }
  document.querySelector("#root .grocerylist").innerHTML = items;
};
