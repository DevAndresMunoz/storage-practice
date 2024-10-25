function getStates() {
    return fetch('states.json')
        .then(response => response.json());
}

let statesObject;

getStates().then(states => {
    // Assign the fetched data to the statesObject variable
    statesObject = states;
    let statesArray = statesObject.states; // Assign array to new variable
    
    let middleIndex = Math.floor(statesObject.states.length / 2); // Dynamically determine middle index for array
    const firstHalfOfStates = statesArray.slice(0, middleIndex); // Save first half of original array to new variable
    const secondHalfOfStates = statesArray.slice(middleIndex); // Save second half of original array to new variable

    for (let i = 0; i < firstHalfOfStates.length; i++) {
        let entryKey = firstHalfOfStates[i].name;
        delete firstHalfOfStates[i].name;
        let entryValue = firstHalfOfStates[i];
        const keyString = JSON.stringify(entryKey);
        const valueString = JSON.stringify(entryValue);
        localStorage.setItem(keyString, valueString);
    }

    for (let i = 0; i < secondHalfOfStates.length; i++) {
        let entryKey = firstHalfOfStates[i].capital;
        delete secondHalfOfStates[i].capital;
        let entryValue = secondHalfOfStates[i];
        const keyString = JSON.stringify(entryKey).toLowerCase();
        const valueString = JSON.stringify(entryValue).toLowerCase();
        sessionStorage.setItem(keyString, valueString);
    }
});

