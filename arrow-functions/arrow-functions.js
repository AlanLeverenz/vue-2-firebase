const greetOne = function(name) {
  console.log('hello ' + name)
}

const greetTwo = name => {
  console.log('hello ' + name)
} 

const greetThree = (name,age) => {
  console.log('hello ' + name + ', you are ' + age + ' years old.')
} 

greetOne('mario')
greetTwo('alan')
greetThree('tess',32)