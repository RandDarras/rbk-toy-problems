/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.

You can assume an input which looks like this:

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
Calling your function should result in:
tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];

Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.
*/

var tallEnoughToRide= function(array) {
  var arr = [];

  for (var i = 0; i < array.length; i++) {

    if( array[i].heightInInches >= 48 ) {
      arr.push(array[i].name);
    }

  }

  return arr;
}

/*

2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"


*/

var tallestPerson= function(array) {
  var tallest= array[0].heightInInches;
  var tallestArr= []; //to push the entire object to be able to take the name for the return statement

 for (var i = 0; i < array.length; i++) {

  if( array[i].heightInInches > tallest ) {
      
      tallest = array[i].heightInInches;
      tallestArr.push(array[i]); //the last element in the array will be the tallest

    }

  }

  if( tallestArr.length === 0 ){ //it means that the array[0] is the tallest

      return array[0].name + " at " + array[0].heightInInches + " inches";
      
  }

  return tallestArr[(tallestArr.length-1)].name + " at " + tallest + " inches";
}