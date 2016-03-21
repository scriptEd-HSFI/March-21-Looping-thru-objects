var pets = { cats: 2, dogs: 3, parrots: 4 };

for(var animal in pets) {
  console.log("I have " + pets[animal] + " " + animal);
}
