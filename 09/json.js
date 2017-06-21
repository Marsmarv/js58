var myJSON = '{ "hello": "world", "foods":[ { "name": "burger"}, { "name": "fries"} ] }';
var parsedJSON = JSON.parse(myJSON);
// console.log(typeof myJSON)
// console.log(typeof parsedJSON)

// console.log(parsedJSON);
// console.log(parsedJSON.hello)
// console.log(parsedJSON.foods)
// console.log("second object in array " + parsedJSON.foods[1])
// console.log("the length of the array " + parsedJSON.foods.length)
console.log(parsedJSON.foods[0].name)
