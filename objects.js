let me = {
  age: 50,
  currentLocation: 'Nowhere',
  mother: {
      name: 'Example',
      age: '80',
      location: 'Everywhere',
    },
  print_details: function() {
    return this.age + ', ' + this.currentLocation
  }
}

console.log(me['age']);
console.log(me['currentLocation']);

me.hobbies = ['Video Games', 'Guitar', 'Politics']
me.hobbies.push('Reading')
console.log(me)

for (let key in me.hobbies) {
 console.log(me.hobbies[key]);
}

me.print_details()
delete me.age