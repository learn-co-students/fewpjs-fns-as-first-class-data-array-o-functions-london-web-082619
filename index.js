function wakeDog(dogName, dogBreed) {
    let action = `Wake ${dogName} the ${dogBreed}`
    console.log(action)
    return action
}

function leashDog(dogName, dogBreed) {
    let action = `Leash ${dogName} the ${dogBreed}`
    console.log(action)
    return action
}

function walkToPark(dogName, dogBreed) {
    let action = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(action);
    return action
}

function throwFrisbee(dogName, dogBreed) {
    let action = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(action)
    return action
}

function walkHome(dogName, dogBreed) {
    let action = `Walk home with ${dogName} the ${dogBreed}`
    console.log(action);
    return action
}

function unleashDog(dogName, dogBreed) {
    let action = `Unleash ${dogName} the ${dogBreed}`
    console.log(action);
    return action
}

const routine = [unleashDog, walkHome, throwFrisbee, walkToPark, leashDog, wakeDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(activity => activity(dogName, dogBreed))
}
    
    
    // for ( let i = 0; i > routine.length; i++ ) {
    //     let activity = routine[i]
    //     let result = activity(dogName, dogBreed)
    //     array.push(result)
    // }
    // return array

