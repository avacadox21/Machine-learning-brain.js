const brain = require('brain.js');
const network = new brain.NeuralNetwork();

//prob with nums
network.train([
  { input: [1, 2], output: [1] },//makes the result  2
  { input: [1, 3], output: [1] },//makes the result 3
  { input: [2, 3], output: [0] },//makes the result 2
  { input: [2, 4], output: [1] }//makes the result 4

]);

const result = network.run([1,4]); //gives a probability if value 1 i.e 4 has a high prob

console.log(`Prob: ${result}`);


