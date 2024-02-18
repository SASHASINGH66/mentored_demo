function anthony() {
  document.getElementById("image-ant").src = "ant.jpg";
  alert(ant.name + " " + ant.age);
  console.log(ant);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var ant = new Person("ant", 100);
var element = document.getElementById("image-ant");

var answers = [0,1,2,3,4,5]

function check(question_no, user_answer) {
  if (answers[question_no] == user_answer) {
    //corect answer
  }
}