setInterval (function(){
  var greetings = ['Hello!', 'Cześć!', 'Ni hao!', "Shalom!", 'Marhaba!', 'Ola!', 'Zdravo!', 'Ahoj!', 'Prywi!', 'Ciao!'];
  var greeting = greetings[Math.floor(Math.random()*greetings.length)];
  var greeting = greeting.fontcolor('#448ae5');
  document.getElementById('hello').innerHTML = greeting + " Translate everything what you want";
}, 1000);
