function sayHello(){
  var response = prompt("whats your name?");
  alert("Hello" + response + ", have a nice day")
}

function showpicture(){
document.getElementById('oImg').style.display = "block";
}

function question(){
var response = prompt("which orange circle is bigger?");
const answers = [1,2,3];
for (var answer in answers){
  if (response === answer){
    alert("you are wrong!hahahhahahh!")
  }
}
alert("In fact, the two circles are equal!")
}
