class Bird {
    constructor(name, sex){
    this.name = name;
    this.sex = sex;
    }
    speak(){
        return this.sex === "male" ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
    }

     // // if statement vs ternary operator // //

    // speak(){
    //   if(this.sex === "male"){
    //     return `It's me! ${this.name}, the parrot!`
    //   }
    //   else{
    //     return `${this.name} says squawk!`
    //   }  
    // }
}
class Cat {
    constructor(name, sex){
      this.name = name;
      this.sex = sex;
    }
    speak(){
      return `${this.name} says meow!`
    }
  }
  
  class Dog {
    constructor(name, sex){
    this.name = name;
    this.sex = sex;
    }
    speak(){
    return `${this.name} says woof!`
    }
  }
  
