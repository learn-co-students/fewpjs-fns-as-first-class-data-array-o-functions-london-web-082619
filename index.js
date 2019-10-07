function wakeDog(dogName, dogBreed){
    let msg = `Wake ${dogName} the ${dogBreed}`
    console.log(msg)
    return  msg
}

function leashDog(dogName="Byron", dogBreed="poodle"){
    let msg = `Leash ${dogName} the ${dogBreed}`
    console.log(msg)
    return msg
}

function walkToPark(dogName="Byron", dogBreed="poodle"){
    let msg = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(msg)
    return msg
}

function throwFrisbee(dogName="Byron", dogBreed="poodle"){
    let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(msg)
    return msg
}

function walkHome(dogName="Byron", dogBreed="poodle"){
    let msg = `Walk home with ${dogName} the ${dogBreed}`
    console.log(msg)
    return msg
}

function unleashDog(dogName="Byron", dogBreed="poodle"){
    let msg = `Unleash ${dogName} the ${dogBreed}`
    console.log(msg)
    return msg
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    // new_array = []
    // for(let i = 0; i < routine.length; i++){
    //     // console.log(routine)
    //     new_array.push(routine[i](dogName, dogBreed));
    // }
    // return new_array
    return routine.map(fu => fu(dogName,dogBreed))
}
