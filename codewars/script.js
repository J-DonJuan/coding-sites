let menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
    },
    get courses(){
        for (course in this._courses){
            console.log(`Course: ${course} Item: ${menu._courses[course]}`);
        }
    },
    set appetizers(newAppetizer){
       this._courses._appetizers.push(newAppetizer);
    },
    set mains(newMain){
       this._courses._mains.push(newMain);
    },
    set desserts(newDessert){
       this._courses._desserts.push(newDessert);
    },

    addDishToCourse: function(courseName, dishName, dishPrice){
        let dish = {
            [dishName]: dishPrice
        }
        console.log(`dish key: ${Object.keys(dish)}`);
        console.log(`dishPrice: ${dish[dishName]}`);
        console.log(`trying to access courses: ${this._courses[courseName]}`)
        this._courses[courseName].push(dish);

    }
}


menu.appetizers = "Mozzerella Sticks";
menu.appetizers = "Onion Rings";
console.log(menu._courses._appetizers);
menu.mains = "Steak";
menu.mains = "Eggs";
menu.desserts = "Cake";
menu.desserts = "Ice Cream";
menu.courses;

menu.addDishToCourse("_appetizers", "Extra Mozzerella Sticks", 5.99);
menu.addDishToCourse("_mains", "Pork Chops", 18.99);
menu.courses;
// menu.courses;


// // Testing adding strings to newly formed objects
// string1 = "Appetizers";
// string2 = "Mozzerella Sticks";

// let dish = {
//     [string1] : string2
// }

// // console.log(`dish.string1 = ${dish.string1}, dish.string2 = ${dish.string2}`);
// console.log(dish);