function getStates() {
    return fetch('states.json')
        .then(response => response.json());
}

let statesObject;

getStates().then(states => {
    // Assign the fetched data to the statesObject variable
    statesObject = states;
    let statesArray = statesObject.states; // Assign array to new variable
    
    let middleIndex = Math.floor(statesObject.states.length / 2); // Dynamically determine halfway index for array
    const firstHalfOfStates = statesArray.slice(0, middleIndex); // Save first half of original array to new variable
    console.log(firstHalfOfStates);
});

