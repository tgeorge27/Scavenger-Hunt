var teachers= [
  "Ken", "Alex", "Adam", "Issac"
];

var name= prompt("What is your name?");
var age= prompt("How old are you?");

for(var i= 0; i < teachers.length; i++) {
  if (i == 1) {
    console.log( name + "," + "you are " + age " years old.")
  };
}
