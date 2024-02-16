class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.#dessert = dessert;
    this.soup = soup;
    this.salad = salad;
    this.entree = entree;
  }
  sweets() {
    console.log(this.#dessert);
  }
}

let x = new Dinner('pot de creme');
// console.log(`dessert: ${x.#dessert}`);

class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return 'obj must be an instance of C';
  }
}
class ClassWithPrivateField {
  #privateField = 50;

  constructor() {}
}
