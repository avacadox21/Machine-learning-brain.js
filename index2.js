const brain = require('brain.js');
const data = require('./data.json');
const network = new brain.recurrent.LSTM();

//prob with string
const trainingData = data.map(item => ({
  input : item.text,
  output : item.category  
}));

network.train(trainingData, {
  iterations: 2000
});

const result = network.run(' fixed power supply');

console.log(`category ${result}`);
