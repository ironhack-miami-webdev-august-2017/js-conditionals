var name = prompt('Name?');
var attempts = 1;

while (name === "") {
  if (attempts === 10) {
    console.log('You are a jerk.');
    break;
  }

  name = prompt('Seriously I need your name.');
  attempts += 1;
}

console.log('YOUR NAME: ' + name);
