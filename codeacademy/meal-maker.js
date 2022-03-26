let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    set appetizers(inputed_app){
      this._courses.appetizers = inputed_app;
    },
    set mains(inputed_main){
      this._courses.mains = inputed_app;
    },
    set desserts(inputed_dessert){
      this._courses.desserts = inputed_dessert;
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      let dish = {
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      let dishes = menu._courses[courseName];
      return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse("appetizers");
        let main = this.getRandomDishFromCourse("mains");
        let dessert = this.getRandomDishFromCourse("desserts");
        console.log(`Your Appetizer: ${appetizer.name}. Price: ${appetizer.price}`);
        console.log(`Your Main: ${main.name}. Price: ${main.price}`);
        console.log(`Your Dessert: ${dessert.name}. Price: ${dessert.price}`);
        let total = appetizer.price + main.price + dessert.price;
        console.log(`The total price is: ${total.toFixed(2)}`);
    }
  }
  
  menu.addDishToCourse("appetizers", "Onion Rings", 4.99);
  menu.addDishToCourse("appetizers", "Fries", 4.50);
  menu.addDishToCourse("appetizers", "Soup", 2.99);
  menu.addDishToCourse("mains", "Steak", 34.99);
  menu.addDishToCourse("mains", "Lobster", 24.99);
  menu.addDishToCourse("mains", "Steak & Eggs", 39.99);
  menu.addDishToCourse("desserts", "Ice Cream", 7.99);
  menu.addDishToCourse("desserts", "Cake", 9.99);
  menu.addDishToCourse("desserts", "Apple Pie", 7.99);
  console.log(menu.appetizers);
  console.log(menu.mains);
  console.log(menu.getRandomDishFromCourse("mains"));
  menu.generateRandomMeal();