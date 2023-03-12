// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) { //function doesn't return anything
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
      <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
             <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
             <li>Number of Moons: ${moons}</li>
        </ol>${imageUrl}">
   `;
}

function validateInput(testInput) { //parameter: string --> return: string //use isNaN(value) method to check if something is NaN; returns true if value is NaN or false if value is NOT NaN
   //let numberInput = Number(testInput);
   switch(numberInput = Number(testInput)) {  //numberInput or testInput? //no default needed??
    case inputFieldEmpty:
        testInput === ""  //user input can't be left empty
        console.log("Empty");
        alert("All input fields are required before submitting");
        break;
    case inputFieldNaN:
        isNaN(testInput)
        console.log("Not a Number");  //returning true
        alert("Make sure to input valid information into each field before submitting")
        break;
    case inputFieldIsNumber:
        !isNaN(testInput) 
        console.log("Is a Number");  //returning false
        break;
   } //switch bracket
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { //list = list of planets?? list of items?? //parameters: strings
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   let launchStatusCheck = document.getElementById("launchStatusCheck"); //??
   let launchStatus = document.getElementById("launchStatus");

   switch(launchStatusCheck) { //OR validateInput()??? 
    case validateInput(pilot):
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;

    case validateInput(copilot):
        copilotStatus.innerHTML = `Co-Pilot ${copilotName} is ready for lauch`;

    case validateInput(fuelLevel):
        if (fuelLevel <= 10000) {
            faultyItems.style.visibility = "visible"; //list.style.visibility = "visible"
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch"; //h2.textContent = "Shuttle not ready for launch"
            launchStatus.style.color = "red";  //?how to get actual color inline? //h2.style.color = "rgb"
            break;
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"; //?how to get color inline?
            break;
        }

    case validateInput(cargoLevel):
        if (cargoLevel >= 10000) {
            faultyItems.style.visibility = "visible"; //
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";  //?how to get actual color inline?
            break;
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";  //?how to get actual color inline?
            break;
        }

    default:
        faultyItems.style.visibility = "hidden"  //list.style.visibility = "hidden"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green";
        break;
   } //switch bracket

} //use validateInput function

// turns visible when false:
// function faultyItems() {
//     var x = document.getElementById('myDIV');
//     if (x.style.visibility === 'hidden') {
//       x.style.visibility = 'visible';
//     } else {
//       x.style.visibility = 'hidden';
//     }
//   }

// async function myFetch() {  //declaring asynchronous function for fetching planetary JSON 
//     // let planetDataReturned; 

//     let planetDataReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json") //capturing response, from API endpoint, with await
//     .then( function(response) {   //control timing and capture response object
//         if () {     //conditional logic for what happens when the promise has been fulfilled, to extract data

//         } else {
//             return response.json();  //extract data from response object
//         }
//     }); 
//     return planetDataReturned; 
// }

// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     result.innerHTML = ``
// })

async function myFetch() {
let planetDataReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
.then(response => response.json())
.then(data => {
    console.log(data);
});
return planetDataReturned;
}   

function pickPlanet(planets) {  //list of planets
    let index = Math.floor(Math.random() * (planets.length)); //randomSelectedIndex //return 1 planet from list of planets (response.length) --> length is 6, begins at 0
    return planets[index];  //randomSelectedIndex //bracket notation --> array of planet objects
} 
//   .catch(error) => {
//     console.log(error);
// };

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


    // // Write a function to reset the question area
    // function clearQuestions() {
    //     questionArea.innerHTML = ""; // the display the page
    //     questions = []; // the array itself;
    // }
