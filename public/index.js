/*
 * Author: Ethan Duong
 * This is the client-side JS file for the plant site.
 *
*/

allPlants = document.querySelectorAll('.nav-bar')

function functionName(){
    console.log("a button was clicked.")
}

function waterPlant(){
    console.log("watering")
    // unhide watering can that waters the plant
    // change plant picture to bigger plant
    // update water progress
}

function fertilizePlant(){
    console.log("fert")
    // unhide fertilizer bag
}

function sunlightPlant(){
    console.log("sun")
    // unhide sunlight
}

function renamePlant(){
    console.log("rename")
    console.log(allPlants)
    
}

function aboutPlant(){
    console.log("about")
    // show description
}

function uprootPlant(){
    console.log("uproot")
    // delete the plant
}

function addPlant(){
    console.log("add plant")
    // new plant
}

document.getElementById('water').addEventListener('click', waterPlant);
document.getElementById('fertilize').addEventListener('click', fertilizePlant);
document.getElementById('sunlight').addEventListener('click', sunlightPlant);
document.getElementById('rename').addEventListener('click', renamePlant);
document.getElementById('about').addEventListener('click', aboutPlant);
document.getElementById('uproot').addEventListener('click', uprootPlant);
document.getElementById('add-plant').addEventListener('click', addPlant);