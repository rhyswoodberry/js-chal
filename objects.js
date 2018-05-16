let me = {
  age: 27,
  currentLocation: 'Sydney',
}

console.log(me['age']);
console.log(me['currentLocation']);

me.hobbies = ['Video Games', 'Guitar', 'Politics']
console.log(me)

delete me.age

//for (let key in me) {
// console.log(me.key);
//}
