// Write your JavaScript code here!

window.addEventListener("load", function() {

    let list = document.getElementById("faultyItems"); //list.style.visibility = "hidden" --> default; 
    let form = document.querySelector("form"); //accessing everything inside document's <form> & return references to elements via CSS selectors
   
   form.addEventListener("submit", function(event) { 
        event.preventDefault();

       let document = window.document
       let pilot= document.querySelector("input[name=pilotName]").value; 
       let copilot = document. querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel = document.querySelector("input[name=cargoMass]").value; 

       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel); //removed: .value from pilot etc.

    }) //form listener ending bracket & parentheses

    //Set listedPlanetsResponse equal to the value returned by calling myFetch()
      let listedPlanets;
      let listedPlanetsResponse = myFetch(); 

    listedPlanetsResponse.then(function (response) {
      listedPlanets = response; 
      console.log(listedPlanets); 
    })
     .then(function() {
        console.log(listedPlanets);
    //use pickPlanet() to randomly choose a planet from the list of planets and add that information to your destination
      let randomSelectedPlanet = pickPlanet(listedPlanets);
      console.log(randomSelectedPlanet);
      
      addDestinationInfo(document, randomSelectedPlanet.name, randomSelectedPlanet.diameter, randomSelectedPlanet.star, randomSelectedPlanet.distance, randomSelectedPlanet.moons, randomSelectedPlanet.image); 
   })

}); //window listener ending bracket & parentheses