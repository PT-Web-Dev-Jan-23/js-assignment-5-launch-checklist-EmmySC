// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       //let  
   })
       //let


   let form = document.querySelector("form"); //accessing everything inside document's <form>

   form.addEventListener("submit", function(event) {  //submit button
    event.preventDefault();

}); //window event listener closing bracket and parentheses

document.getElementById("formSubmit").addEventListener('click', function(event) {  //submit button = formSubmit

})

// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// Validate the user responses with `preventDefault()` to ensure the following: 

//    a. The user has entered something for every field.

//    b. The user has entered string values for names and number for fuel and cargo levels.

// 1. With validation, update a list of what is currently ready or not ready for the shuttle launch.
// 1. Use the DOM to update CSS to indicate what is good and bad about the shuttle and whether it is ready for launch.
// 1. Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed.
