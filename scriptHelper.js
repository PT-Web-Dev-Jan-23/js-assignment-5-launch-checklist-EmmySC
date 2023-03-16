// Write your helper functions here!
require('isomorphic-fetch');

//updates: div id="missionTarget" --> doesn't return anything
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //the HTML formatting for our mission target div
    const missionTarget = document.getElementById("missionTarget");
       missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
              <ol>
                  <li>Name: ${name}</li>
                  <li>Diameter: ${diameter} </li>
                  <li>Star: ${star}</li>
                  <li>Distance from Earth: ${distance}</li>
                  <li>Number of Moons: ${moons}</li>
             </ol>
             <img src=${imageUrl}>
           `;
 }
 
 //validates input from formSubmission --> Strings for pilot & copilot, Numbers for fuel level & cargo level
 function validateInput(testInput) {  
    try {
       if (testInput === "") {
          console.log("Empty");
          return "Empty";
        } 
        else if (isNaN(Number(testInput))) { 
             console.log("Not a Number");
             return "Not a Number";
        } 
        else { (!isNaN(Number(testInput)))
             return "Is a Number";
        }
    } catch(error) {
        console.error(error);
    }
 }
 
 //takes in user input for the shuttle launch checklist (the display)
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = list; // let list = document.getElementById("faultyItems"); // div id="faultyItems"
    //list.style.visibility = "hidden"; //default
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let launchStatus = document.getElementById("launchStatus"); //h2 id="launchStatus"
 
  ///validation w/ alerts///
     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
         list.style.visibility = "hidden"; //redundant?
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("All fields are required before submiting.");
     }
     else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
         list.style.visibility = "hidden"; //redundant?
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("Enter only letters for the Pilot and Co-Pilot fields.");
     }
     else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
         list.style.visibility = "hidden"; //redundant?
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
         alert("Enter only numbers for the Fuel Level and Cargo Mass fields.");
     } 
 
  //// updates: div id="launchStatusCheck" based on test scenarios ////
 
         //fuel level too low (less than 10,000L), change h2 id="launchStatus" to "Shuttle Is Not Ready For Launch" & h2.style.color = "red"
     else {
        if (fuelLevel < 10000 && cargoLevel > 10000) { //not <= && >=
             faultyItems.style.visibility = "visible"; //list.style.visibility
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level is too low for launch"; //fuelLevel
             cargoStatus.innerHTML = "Cargo mass is too heavy for launch" //cargoLevel
             launchStatus.innerHTML = "Shuttle Is Not Ready For Launch"; //h2
             launchStatus.style.color = "red"; 
         } 
     
         //fuel level too low (less than 10,000L), change h2 id="launchStatus" to "Shuttle Is Not Ready For Launch" & h2.style.color = "red"
         else if (fuelLevel < 10000 && cargoLevel <= 10000) { //not <= && <=  OR  < && <=  OR  < && < ?
             faultyItems.style.visibility = "visible"; //list.style.visibility
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level is too low for launch"; //fuelLevel
             cargoStatus.innerHTML = "Cargo mass is low enough for launch" //cargoLevel
             launchStatus.innerHTML = "Shuttle Is Not Ready For Launch"; //h2
             launchStatus.style.color = "red"; 
         }
     
         //cargo level too large (more than 10,000kg), change h2 id="launchStatus" to "Cargo mass is too heavy for launch" & h2.style.color = "red"
         else if (fuelLevel >= 10000 && cargoLevel > 10000) { //not >= && >=  OR  >= && >  OR  > && > ?
             faultyItems.style.visibility = "visible"; //list.style.visibility
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level is high enough for launch" //fuelLevel
             cargoStatus.innerHTML = "Cargo mass is too heavy for launch"; //cargoLevel
             launchStatus.innerHTML = "Shuttle Is Not Ready For Launch"; //h2
             launchStatus.style.color = "red"; 
         } 
 
         //default: fuel level high enough & cargo level low enough --> "Shuttle Is Ready For Launch" & h2.style.color = "green"
         else {  //if (fuelLevel > 10000 && cargoLevel < 10000) //not >= && <=
             faultyItems.style.visibility = "visible";  //list.style.visibility
             pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
             copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
             fuelStatus.innerHTML = "Fuel level is high enough for launch"; //fuelLevel
             cargoStatus.innerHTML = "Cargo mass is low enough for launch"; //cargoLevel
             launchStatus.innerHTML = "Shuttle Is Ready For Launch"; //h2
             launchStatus.style.color = "green"; 
         }
 
     } //end of else block
         
 } //end of formSubmission
 
 //gets json planet response data //how to handle broken promise? --> request sent, no response w/ data returned
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then(function(response) {
         if (response.status >= 400) { //error code: 400s and 500s ??
             throw new Error ("Error: bad fetch response");
         } else {
             let data = response.json();
             console.log(data);
             return data;
         }
     });
     return planetsReturned;
 }
 
 //returns a randomly selected planet from fetched json
 function pickPlanet(planets) {
     let randomSelectedPlanet = planets[Math.floor(Math.random() * planets.length)];
     return randomSelectedPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 
 
 
 //NOTES:
 //.catch(error) => { console.log(error); };
 
// faultyItems.style.visibility = "hidden"
// pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
// copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
// cargoStatus.innerHTML = "Cargo mass low enough for launch"
// launchStatus.innerHTML = "Shuttle is ready for launch";
// launchStatus.style.color = "green"; 
 