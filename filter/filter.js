var users = [
  { name: 'alan', premium: true },
  { name: 'debra', premium: true },
  { name: 'tess', premium: false },
  { name: 'kim', premium: false }
]

var newUsers = users.filter((item) => {
  return !item.premium
})

console.log(newUsers)
// console.log(users)