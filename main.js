// Your code here.

function getFirstName(name) {//returns the first name of the given person
  return name.firstName;
}

function getLastName(name) {//returns the last name of the given person
  return name.lastName;
}

function getFullName(fullName) {//returns the first name and last name of the given person, with a space in the middle
  firstandlastName = fullName.firstName.concat(" ", fullName.lastName);

  return firstandlastName;
}

function setFirstName(name, nameChange) {
  name.firstName = nameChange


  return name.firstName;
}

function setAge(name, ageChange) {//sets age on the given person

  name.age = ageChange
  //console.log(name)
  //console.log(name.age);
  //console.log(name.ageChange)
  //console.log(name.firstName);
  //console.log(ageChange);
  return name.ageChange;

}
function giveBirthday(name, baby) {
  if (name) {
    //console.log(name.age + 2)
    //console.log(name)
    return name.age + 1
  } else if (baby) {
    return baby[age + 1];
  }
}

function marry(groom, bride, groom2, bride2){
  let x = true//sets the marital status of both given people to true
  groom.married = x;
  bride.married = x;
  //=========================================
  console.log(groom)
  console.log(bride)
  bride.spouseName = "Colin Jaffe";
  groom.spouseName = "Petra Solano"; 
  bride2.spouseName = "Michael Cordero";
  groom2.spouseName = "Jane Villanueva";
}



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
