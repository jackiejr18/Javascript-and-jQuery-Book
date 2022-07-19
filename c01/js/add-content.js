var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'buenas noches!';
} 

else if (hourNow > 12) {
  greeting = 'buenas tardes!';
}

else if (hourNow > 0) {
  greeting = 'buenas dias!';
}

else {
  greeting = 'la bienvenida!';
}

document.write('<h3>' + greeting + '</h3>')