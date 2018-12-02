/*
 * Author: Ethan Duong
 * This is the client-side JS file for the plant site.
 *
*/

allPlants = document.querySelectorAll('.plant-title');
var currentPlantIndex = 0;

function changeCurrentIndex(event) { // changes the index when switching plants
    for(var i = allPlants.length - 1; i >= 0; i--){
        if(allPlants[i] == event.target){
            currentPlantIndex = i;
        }
    }
}

function waterPlant() {
    console.log("watering");
    // unhide watering can that waters the plant
    // change plant picture to bigger plant
    // update water progress
}

function fertilizePlant() {
    console.log("fert");
    // unhide fertilizer bag
}

function sunlightPlant() {
    console.log("sun");
    // unhide sunlight
}

function renamePlant() {
    allPlants[currentPlantIndex].textContent = "renamed";
}

function aboutPlant() {
    console.log("about");
    // show description
}

function uprootPlant() { // delete the plant
    var plantContainer = document.querySelectorAll('.plant-and-button');
    // plantContainer[currentPlantIndex].parentNode.removeChild(plantContainer[currentPlantIndex]);
    plantContainer[0].parentNode.removeChild(plantContainer[0]);
    allPlants[currentPlantIndex].parentNode.removeChild(allPlants[currentPlantIndex]);
}

function addPlant() {
    console.log("add plant");
    // new plant
}

document.getElementById('water').addEventListener('click', waterPlant);
document.getElementById('fertilize').addEventListener('click', fertilizePlant);
document.getElementById('sunlight').addEventListener('click', sunlightPlant);
document.getElementById('rename').addEventListener('click', renamePlant);
document.getElementById('about').addEventListener('click', aboutPlant);
document.getElementById('uproot').addEventListener('click', uprootPlant);
document.getElementById('add-plant').addEventListener('click', addPlant);

// when page loads add click listeners to plant names
window.addEventListener('DOMContentLoaded', function () {
    for(var i = allPlants.length - 1; i >= 0; i--){
        allPlants[i].addEventListener('click', changeCurrentIndex);
    }
});