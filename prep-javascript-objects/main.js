var person = {
  firstName: 'Chase',
  lastName: 'Simmonds',
  hobby: 'Anything competitive or creative!'
};

var fullName = person.firstName + ' ' + person.lastName;

person.job = 'Selling software';
person.previousJob = 'Same exact thing';

console.log("This person's name is: " + (fullName));
console.log("This person's current job is: " + (person.job));
console.log("This person's previous job was: " + (person.previousJob));
console.log("The complete person's object: ");
console.log(person);
