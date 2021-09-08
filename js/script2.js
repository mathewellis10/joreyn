let student = {name: "Park", age: 17}; //object literal

let isTeenager =  function(age){ //function
    if(this.age < 20){
        return "teenager";
    }else{
        return "not a teenager";
    }
}

console.log(isTeenager.call(student)); //call function