function wakeDog(dogName, dogBreed) {
    return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
    return (`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
    return (`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
    return (`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
    return (`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog]

function exerciseDog(dogName, dogBreed) {
        return routine.map(f => f(dogName, dogBreed));
}
 var result = exerciseDog()
 console.log(result)
 
 
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var i;
for (i = 0; i < cars.length; i++) {
     console.log(cars[i])
   }
   
let numbers = [1,2,3,4,5,6,7];
let test = () => {
    numbers.map(function(el) { 
        debugger;
        return el * 2
} 
)};
    

let result2 = numbers.map(function(el) {
        debugger;
        return el * 2
});