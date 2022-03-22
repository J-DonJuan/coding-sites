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
    get appetizers() {
        console.log("--appetizers getter method incoming--")
        console.log(this._courses._appetizers);
    },
    get mains() {
        console.log("--mains getter method incoming--")
        console.log(this._courses._mains);
    },
    get desserts() {
        console.log("--desserts getter method incoming--")
        console.log(this._courses._desserts);
    },

    addDishToCourse: function(courseName, dishName, dishPrice){
        let dish = {
            [dishName]: dishPrice
        }
        // Just trying to figure out indexing in the object
        // console.log(`dish key: ${Object.keys(dish)}`);
        // console.log(`dishPrice: ${dish[dishName]}`);
        // console.log(`trying to access courses: ${this._courses[courseName]}`)
        this._courses[courseName].push(dish);

    }
}


menu.appetizers = "Mozzerella Sticks";
menu.appetizers = "Onion Rings";
menu.appetizers;
menu.mains = "Steak";
menu.mains = "Eggs";
menu.desserts = "Cake";
menu.desserts = "Ice Cream";

menu.addDishToCourse("_appetizers", "Extra Mozzerella Sticks", 5.99);
menu.addDishToCourse("_mains", "Pork Chops", 18.99);

// menu.courses;
menu.appetizers;
menu.desserts;
