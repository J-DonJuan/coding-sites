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
  }
  
  menu.addDishToCourse("appetizers", "Onion Rings", 4.99);
  menu.addDishToCourse("appetizers", "Fries", 4.50);
  menu.addDishToCourse("appetizers", "Soup", 2.99);
  menu.addDishToCourse("mains", "Steak", 34.99);
  menu.addDishToCourse("mains", "Lobster", 24.99);
  menu.addDishToCourse("mains", "Steak & Eggs", 39.99);
  console.log(menu.appetizers);
  console.log(menu.mains);






































// let menu = {
//     _courses: {
//       _appetizers: [],
//       _mains: [],
//       _desserts: [],
//     },
//     get courses(){
//         for (course in this._courses){

//             // console.log(this._courses[course]);
//         }
//     },
//     set appetizers(newAppetizer){
//        this._courses._appetizers.push(newAppetizer);
//     },
//     set mains(newMain){
//        this._courses._mains.push(newMain);
//     },
//     set desserts(newDessert){
//        this._courses._desserts.push(newDessert);
//     },
//     get appetizers() {
//         console.log("--appetizers getter method incoming--")
//         console.log(this._courses._appetizers);
//     },
//     get mains() {
//         console.log("--mains getter method incoming--")
//         console.log(this._courses._mains);
//     },
//     get desserts() {
//         console.log("--desserts getter method incoming--")
//         console.log(this._courses._desserts);
//     },

//     addDishToCourse: function(courseName, dishName, dishPrice){
//         let dish = {
//             [dishName]: dishPrice
//         }
//         this._courses[courseName].push(dish);
//     }
// }


// menu.addDishToCourse("_appetizers", "Onion Rings", 6.99);
// menu.addDishToCourse("_appetizers", "Extra Mozzerella Sticks", 5.99);
// menu.addDishToCourse("_mains", "Pork Chops", 18.99);
// menu.addDishToCourse("_mains", "Steak", 24.99);

// // menu.courses;
// menu.appetizers;
// menu.mains;
