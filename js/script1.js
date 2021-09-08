let myPet = { //creating object using literal
    type : dog,
    name : layla,
    breed : shihTzu,
    age : 10,
    gender : Female
};

myPet.prototype.talk = function(){ //method
    console.log("arf arf");
}

myPet.prototype.walk = function(){ //method
    console.log("morning walk");
}