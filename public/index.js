/*
 * Author: Ethan Duong
 * This is the client-side JS file for the plant site.
 *
*/

var allPlantsTitle = document.querySelectorAll('.plant-title');
var allPlantsContainerNode = document.querySelectorAll('.plant-and-button');
var allPlantsContainer = Array.prototype.slice.call(allPlantsContainerNode); // convert the node to an array; https://davidwalsh.name/nodelist-array
var currentPlantIndex = 0;

function changeCurrentIndex(event) { // changes the index when switching plants
    for(var i = allPlantsTitle.length - 1; i >= 0; i--){
        if(allPlantsTitle[i] == event.target){
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
    allPlantsTitle[currentPlantIndex].textContent = "renamed";
}

function aboutPlant() {
    console.log("about");
    // show description
}

function uprootPlant() { // delete the plant
    // plantContainer[currentPlantIndex].parentNode.removeChild(plantContainer[currentPlantIndex]);
    allPlantsContainer[0].parentNode.removeChild(allPlantsContainer[0]);
    allPlantsTitle[currentPlantIndex].parentNode.removeChild(allPlantsTitle[currentPlantIndex]);
}

function addPlant() { // new plant
    console.log("add plant");
    
    //get user inputs
    // var plantName = document.getElementById('').value;
    // var plantImage = document.getElementById('').value;
    var plantName = "My Plant";
    var plantImage = "https://www.ikea.com/PIAimages/0614197_PE686822_S5.JPG";

    // plant and button div
    var plantAndButtonContainer = document.createElement('div');
    plantAndButtonContainer.classList.add('plant-and-button');

    // plant image div
    var plantImageContainer = document.createElement('div');
    var plantImage = document.createElement('img');
    plantImageContainer.classList.add('plant-image');
    // postImg.setAttribute('src', postPhotoUrl);
    // postImg.setAttribute('alt', postTitleText);

    // buttons section
    var buttonSection = document.createElement('section');

    // water
    var outterButtonDiv1 = document.createElement('div');
    var innerButtonDiv1 = document.createElement('div');
    var button1  = document.createElement('button');

    // fertilize
    var outterButtonDiv2 = document.createElement('div');
    var innerButtonDiv2 = document.createElement('div');
    var button2  = document.createElement('button');

    // sunlight
    var outterButtonDiv3 = document.createElement('div');
    var innerButtonDiv3 = document.createElement('div');
    var button3  = document.createElement('button');

    // rename
    var outterButtonDiv4 = document.createElement('div');
    var innerButtonDiv4 = document.createElement('div');
    var button4  = document.createElement('button');

    // about
    var outterButtonDiv5 = document.createElement('div');
    var innerButtonDiv5 = document.createElement('div');
    var button5  = document.createElement('button');

    // uproot
    var outterButtonDiv6 = document.createElement('div');
    var innerButtonDiv6 = document.createElement('div');
    var button6  = document.createElement('button');



    currentPlantIndex = 4;
    document.body.appendChild(plantAndButtonContainer);
    // allPlantsContainer.appendChild(plantAndButtonContainer);
    // console.log(allPlantsContainer)

    // console.log(typeof(allPlantsContainer));
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
    for(var i = allPlantsTitle.length - 1; i >= 0; i--){
        allPlantsTitle[i].addEventListener('click', changeCurrentIndex);
    }
});
