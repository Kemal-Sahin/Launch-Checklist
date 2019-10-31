// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
*/

function init () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
      })
      .then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML +=
          `<h2>Mission Destination</h2>
          <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
          </ol>
          <img src="${json[2].image}"/>`
      })
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      let pilotStatus = document.getElementById("pilotStatus"); 
      let copilotStatus = document.getElementById("copilotStatus"); 
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let show = document.getElementById("faultyItems").style.visibility = "visible";
      pilotStatus.innerHTML = `${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `${copilotName.value} is ready for launch`;
      if (pilotName.value === "" || fuelLevel.value === "" || copilotName.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Pilot or Co Pilot name invalid")
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("fuel level and cargo mass require numbers")
         event.preventDefault();
      } else if (fuelLevel.value <= 10000) {
         show;
         fuelStatus.innerHTML = `Not enough fuel for the journey`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         event.preventDefault();
      }  else if (cargoMass.value >= 10000) {
         show;
         cargoStatus.innerHTML = `Too much mass for the shuttle to take off`;
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         event.preventDefault();
      }  else {
         show; 
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         event.preventDefault();
         }
      }) 
   };
   window.onload = init;
   


