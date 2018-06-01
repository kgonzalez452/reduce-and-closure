const food = {
    salmon: 'excellent',
    broccoli: 'excellent',
    snickers: 'foodPorn',
    sirloinSteak: 'great',
    banana: 'good',
    blueberry: 'cool',
    poptarts: 'foodPorn'
};

// console.log(food);

// var foodArray = [];
// for(let elem in food) {
//     if(food.hasOwnProperty(elem)) {
//         foodArray.push(elem);
//     };
// }

// Imperative
// var foodArray = [];
// for(let elem in food) {
//     if(food.hasOwnProperty(elem)) {
//         foodArray.push([elem, food[elem]]);
//     };
// }
// console.log(foodArray);

// // Declarative
// console.log(Object.entries(food));
// console.log(Object.keys(food));
// console.log(Object.values(food));


// const foodPornObj = Object.entries(food).reduce(
//     (badFood, [foodName, quality]) => {
//         if (quality == 'foodPorn') {
//             badFood[foodName] = quality;
//         }
//         return badFood;
//     }
// )
// const foodPornObj = Object.entries(food).reduce(
//     (goodFood, quality) => {
//         if (quality == '') {
//             goodFood[foodName] = quality;
//             return goodFood + 1;
//         }
//         return goodFood;
//     }, 0);


// console.log(foodPornObj);

const goodFood = Object.entries(food).filter(([foodName, quality]) => quality =='excellent').map(([foodName]) => foodName);

// const excellentFood = Object.entries(food).reduce(excellentFood, quality]) => quality =='excellent').map(([foodName]) => foodName);

