class Dog {
  constructor(name, location, total_distance) {
    this.name = name;
    this.location = location;
    this.total_distance = total_distance
  }

  speak(){
    console.log(`WOOF! My name is ${this.name}`)
  }

  walk(place, distance){
    console.log('I walked to' + ' ' + place + ' ' + 'which was' + ' ' + distance + 'kms')  
  }

  total_distance(){
    
  }
}

// Dog.prototype.walk = function(location, distance){
//   console.log('I walked to' + ' ' + location + ' ' + distance + 'kms')
// }

let dog = new Dog('Che', 'Cuba')
