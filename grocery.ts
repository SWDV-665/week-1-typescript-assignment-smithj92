import fs from "fs";

class Grocery {
  name: string;
  quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

const groceries: Grocery[] = [
    new Grocery("Cereal", 1),
    new Grocery("Pizza", 2),
    new Grocery("milk", 1),
    new Grocery("Shampoo", 2),
    new Grocery("Butter", 3),
    new Grocery("flour", 1),
    new Grocery("coke", 12),
  ];
  

let htmlOutput = "<ul>";

for (const item of groceries) {
  htmlOutput += `<li>${item.quantity} ${item.name}</li>`;
}

htmlOutput += "</ul>"; 

fs.writeFile("groceries.html", htmlOutput, (err) => {
  if (err) throw err;
});
