
function greet(getTme){
let name = "Chiamaka";
let getDay = new Date ();
let getTime = getDay.getHours();
if (getTime < 12){

console.log("Good morning"  +  name);
} else {
    console.log ("Good Afternoon"  + name);
}
}
greet (12);