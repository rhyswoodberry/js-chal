class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  speak(){
    console.log(`WOOF! My name is ${this.name}`)
  }

  // walk(loaction, distance){
  //   console.log('I walked to' + ' ' + location + ' ' + distance + 'kms')
  // }

}

Dog.prototype.walk = function(location, distance){
  console.log('I walked to' + ' ' + location + ' ' + distance + 'kms')
}

// let dog = new Dog('Che', 'Cuba')
