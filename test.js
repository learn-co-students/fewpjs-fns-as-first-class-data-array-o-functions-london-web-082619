var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i;
for (i = 0; i < cars.length; i++) {
     console.log(cars[i])
   }

let numbers = [1,2,3,4,5,6,7];
let result = () => {
    numbers.map(function(el) { 
        debugger;
        return el * 2
} 
)};

result()