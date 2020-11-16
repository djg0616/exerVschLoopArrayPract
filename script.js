//#1 - Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count = 0;

for (var i=0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer"){
    count++;
  }
}

console.log(count);

//#2 - Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (var i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  var person = peopleWhoWantToSeeMadMaxFuryRoad[i];
  var pronoun = person.gender === "female" ? "She": "He";
  if (person.age >=18) {
    console.log(`${person.name} is old enough. ${pronoun}\'s good to see Mad Max Fury Road.`);
  }
  else {
    console.log(`${person.name} is not old enough. ${pronoun}\'s not good to see Mad Max Fury Road.`);
  }
}

/*Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

The light is off to start with. Log to the console whether or not the light is on at the end.*/


// var arr = [2, 3, 2];
// var arr = [2, 5, 435, 4, 3] // "The light is on"
// var arr = [1, 1, 1, 1, 3]   // "The light is on"
var arr = [9, 3, 4, 2]      // "The light is off"
var lightOn = false;
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (i === 0) {
    sum = arr[i] + arr[i + 1];
  } else if (i + 1 < arr.length) {
    sum = sum + arr[i + 1];
  }
  console.log(sum);
  for (var j = 0; j < sum; j++) {
    lightOn = !lightOn;
  }
}
console.log('light on: ' + lightOn);

// or this way using the reduce method
//var arr = [2, 3, 2];
//var arr = [2, 5, 435, 4, 3];
// var arr = [9, 3, 4, 2];
// var lightOn = false;
// var toggleCount = arr.reduce(function (a, b) {
//   return a + b;
// });

// for (var i=0; i < toggleCount; i++) {
//   lightOn = !lightOn;
// }
// if (lightOn){
//   console.log("the light is on");
// }
// else {
//   console.log("the light is not on");
// }
