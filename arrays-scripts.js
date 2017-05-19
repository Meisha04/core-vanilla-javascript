var noiseArray = ['baby'];
//new variable, with an array holding 1 element
noiseArray.unshift('alarm');
// add an element to the front of the array ['alarm','baby']
noiseArray.push('dog barking', 'doorbell');
//add an element to the end of the array ['alarm', 'baby', 'dog barking']
//add another element to the end of an array ['alarm', 'baby', 'dog barking', 'doorbell']
console.log(noiseArray.length);
//the length of the array is 4
var index = noiseArray.lastIndexOf('doorbell');
console.log(index);
//the last index is 42. The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
var animals = ['dolphin'];
var quackers = { username: 'Mommy', tagline: 'No sleep!', noises: ['alarm', 'baby', 'dog barking', 'doorbell'] }
