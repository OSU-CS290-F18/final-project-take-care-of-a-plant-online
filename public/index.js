/*
 * Author: Ethan Duong
 * This is the client-side JS file for the plant site.
 *
*/

var allPlantsTitle = document.querySelectorAll('.plant-title');
var allPlantsContainerNode = document.querySelectorAll('.plant-and-button');
var allPlantsContainer = Array.prototype.slice.call(allPlantsContainerNode); // convert the node to an array; https://davidwalsh.name/nodelist-array
var currentPlantIndex = 0;
var allPlantsContainerSection = document.getElementById('all-plants')

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

function addPlantButton(){ // calls when add plant button is clicked
    document.getElementById('modal-backdrop').classList.toggle('hidden'); //unhide backdrop
    document.getElementById('add-plant-modal').classList.toggle('hidden'); //unhide modal
}

function closeModal(){
    document.getElementById('modal-backdrop').classList.toggle('hidden'); //hide backdrop
    document.getElementById('add-plant-modal').classList.toggle('hidden'); //hide modal

    document.getElementById('flower-name-input').value = '';
    document.getElementById('flower-photo-input').value = '';
    document.getElementById('flower-about-input').value = '';
}

function acceptModal(){
    var plantName = document.getElementById('flower-name-input').value;
    var plantImageSource = document.getElementById('flower-photo-input').value;
    var plantAboutMeInfo = document.getElementById('flower-about-input').value;

    if( (!plantName) || (!plantImageSource) || (!plantAboutMeInfo) ){
        alert("All fields must be filled out."); //send an alert saying this
    }
    else{
        closeModal();
        addPlant(plantName, plantImageSource, plantAboutMeInfo);
    }
}

function addPlant(plantName, plantImageSource, plantAboutMeInfo) { // new plant
    // plant and button div
    var plantAndButtonContainer = document.createElement('div');
    plantAndButtonContainer.classList.add('plant-and-button');

    // plant image div
    var plantImageContainer = document.createElement('div');
    var plantImage = document.createElement('img');
    plantImageContainer.classList.add('plant-image');
    plantImage.setAttribute('src', plantImageSource);
    plantImage.setAttribute('alt', plantName);
    plantImageContainer.appendChild(plantImage);
    plantAndButtonContainer.appendChild(plantImageContainer);

    // buttons section
    var buttonSection = document.createElement('section');
    buttonSection.classList.add('tool-buttons')
    plantAndButtonContainer.appendChild(buttonSection);

    // water
    var outterButtonDiv1 = document.createElement('div');
    var innerButtonDiv1 = document.createElement('div');
    var button1  = document.createElement('button');
    outterButtonDiv1.classList.add('button');
    innerButtonDiv1.classList.add('button-contents');
    button1.classList.add('water');
    button1.textContent = "Water";
    innerButtonDiv1.appendChild(button1);
    outterButtonDiv1.appendChild(innerButtonDiv1);
    buttonSection.appendChild(outterButtonDiv1);
    
    // fertilize
    var outterButtonDiv2 = document.createElement('div');
    var innerButtonDiv2 = document.createElement('div');
    var button2  = document.createElement('button');
    outterButtonDiv2.classList.add('button');
    innerButtonDiv2.classList.add('button-contents');
    button2.classList.add('fertilize');
    button2.textContent = "Fertilize";
    innerButtonDiv2.appendChild(button2);
    outterButtonDiv2.appendChild(innerButtonDiv2);
    buttonSection.appendChild(outterButtonDiv2);

    // sunlight
    var outterButtonDiv3 = document.createElement('div');
    var innerButtonDiv3 = document.createElement('div');
    var button3  = document.createElement('button');
    outterButtonDiv3.classList.add('button');
    innerButtonDiv3.classList.add('button-contents');
    button3.classList.add('sunlight');
    button3.textContent = "Sunlight";
    innerButtonDiv3.appendChild(button3);
    outterButtonDiv3.appendChild(innerButtonDiv3);
    buttonSection.appendChild(outterButtonDiv3);

    // rename
    var outterButtonDiv4 = document.createElement('div');
    var innerButtonDiv4 = document.createElement('div');
    var button4  = document.createElement('button');
    outterButtonDiv4.classList.add('button');
    innerButtonDiv4.classList.add('button-contents');
    button4.classList.add('rename');
    button4.textContent = "Rename";
    innerButtonDiv4.appendChild(button4);
    outterButtonDiv4.appendChild(innerButtonDiv4);
    buttonSection.appendChild(outterButtonDiv4);

    // about
    var outterButtonDiv5 = document.createElement('div');
    var innerButtonDiv5 = document.createElement('div');
    var button5  = document.createElement('button');
    outterButtonDiv5.classList.add('button');
    innerButtonDiv5.classList.add('button-contents');
    button5.classList.add('about');
    button5.textContent = "About";
    innerButtonDiv5.appendChild(button5);
    outterButtonDiv5.appendChild(innerButtonDiv5);
    buttonSection.appendChild(outterButtonDiv5);

    // uproot
    var outterButtonDiv6 = document.createElement('div');
    var innerButtonDiv6 = document.createElement('div');
    var button6  = document.createElement('button');
    outterButtonDiv6.classList.add('button');
    innerButtonDiv6.classList.add('button-contents');
    button6.classList.add('uproot');
    button6.textContent = "Uproot";
    innerButtonDiv6.appendChild(button6);
    outterButtonDiv6.appendChild(innerButtonDiv6);
    buttonSection.appendChild(outterButtonDiv6);

    var plantTitleLink = document.createElement('a')
    plantTitleLink.textContent = plantName;
    plantTitleLink.setAttribute('href', "#");
    plantTitleLink.classList.add('plant-title');
    // currentPlantIndex = 4;
    document.body.appendChild(plantAndButtonContainer);
    // allPlantsTitle.appendChild(plantTitleLink);
    // document.body.appendChild(plantTitleLink);
    // allPlantsContainerSection.appendChild(plantAndButtonContainer);
}

// when page loads add click listeners to plant names
window.addEventListener('DOMContentLoaded', function () {
    // Opening the modal
    document.getElementById('add-plant').addEventListener('click', addPlantButton);
    // Cancelling the modal
    document.getElementById('modal-cancel').addEventListener('click', closeModal);
    document.getElementById('modal-close').addEventListener('click', closeModal);
    // Accepting the modal
    document.getElementById('modal-accept').addEventListener('click', acceptModal);

    // add functions to buttons
    document.getElementsByClassName('water')[0].addEventListener('click', waterPlant);
    document.getElementsByClassName('fertilize')[0].addEventListener('click', fertilizePlant);
    document.getElementsByClassName('sunlight')[0].addEventListener('click', sunlightPlant);
    document.getElementsByClassName('rename')[0].addEventListener('click', renamePlant);
    document.getElementsByClassName('about')[0].addEventListener('click', aboutPlant);
    document.getElementsByClassName('uproot')[0].addEventListener('click', uprootPlant);
    
    // apply indexes
    for(var i = allPlantsTitle.length - 1; i >= 0; i--){
        allPlantsTitle[i].addEventListener('click', changeCurrentIndex);
    }

});
