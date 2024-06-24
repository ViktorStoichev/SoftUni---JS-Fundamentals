function cats(array) {

  for (let index = 0; index < array.length; index++) {
    let [currName, currAge] = array[index].split(" ");

    class Cat{
      constructor (name, age) {
        this.catName = name;
        this.catAge = age;
      }
  
      meow() {
        console.log(`${this.catName}, age ${this.catAge} says Meow`);
      }
    }

    let currCat = new Cat(currName, currAge);
    currCat.meow();
  }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])