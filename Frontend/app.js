class Mammal{
  constructor(name){
    this.name=name;
    this.type="warm blooded"
  }
  eat(){
    console.log("i am eating");
  }
}

class Dog extends Mammal{
  constructor(name){
    super(name);
  }
  bark(){
    console.log("boww..")
  }
  eat(){
    console.log("Dog is eating")
  }
}
class Cat extends Mammal{
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...")
  }
}

let d1=new Dog ("guppy");
