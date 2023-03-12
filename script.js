// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (resultData) {
       listedPlanets = resultData;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanetSelected = pickPlanet(listedPlanets);
       addDestinationInfo(document, randomPlanetSelected.name, randomPlanetSelected.diameter, randomPlanetSelected.star, randomPlanetSelected.distance, randomPlanetSelected.moons, randomPlanetSelected.imageUrl);
   })

   //need to add: list = document.getElementById("faultyItems"); --> list.style.visibility = "hidden";
   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form"); //accessing everything inside document's <form> //to return references to elements via CSS selectors

   form.addEventListener("submit", (event) => {  //submit button
    
    let pilotInput = document.querySelector("input[name = pilotName]").value; //forced to use querySelector, not all have ids //element tag, use bracket notation for attribute reference //returns a string
    //use <input> element to accept user iput data on forms //use name attribute to reference client-side form data
    pilot = pilotInput;
    let copilotInput = document.querySelector("input[name = copilotName]").value;
    copilot = copilotInput;

    let fuelInput = document.querySelector("input[name = fuelLevel]").value; //returns string
    fuelLevel = Number(fuelInput); //convert to Number value

    let cargoInput = document.querySelector("input[name = cargoMass").value;
    cargoLevel = Number(cargoInput);

    event.preventDefault();
    // document.forms["testForm"].submit();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

   })

}); //window event listener closing bracket and parentheses

// document.getElementById("formSubmit").addEventListener('click', (event) => {  //submit button = formSubmit
//     event.preventDefault();

//     let pilotInput = document.getElementsByName("pilotName");
//     let copilotInput = document.getElementsByName("copilotName");
//     let fuelInput1 = document.getElementsByName("fuelLevel");
//     let fuel = Number(fuelInput1);
//     let cargoInput = document.getElementsByName("cargoMass");
//     let cargo = Number(cargoInput);

// } //