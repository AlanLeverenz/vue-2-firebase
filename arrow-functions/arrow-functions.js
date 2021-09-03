const greetOne = function(name) {
  console.log('hello ' + name)
}

const greetTwo = name => {
  console.log('hello ' + name)
} 

const greetThree = (name,age) => {
  console.log('hello ' + name + ', you are ' + age + ' years old.')
} 

// as a callback function
// object.method(name => {
//   console.log('hello ' + name)
// })


greetOne('mario')
greetTwo('alan')
greetThree('tess',32)