// Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  // Computed Property Names ES2015
  let favoriteNumber = 7;

const instructor = {
  firstName: "Kristen",
  [favoriteNumber]: "This is my favorite number."
}

// Object Methods ES2015
const instructor = {
    firstName: "Kristen",
    sayHi(){
      return "Hi";
    },
    sayBye(){
      return this.firstName + " say bye!";
    }
  }

  // createAnimal function
  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}