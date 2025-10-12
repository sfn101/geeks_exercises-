class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

// ? Question: Analyze the code below. What will be the output?
// # output: i'm pink. 🌸 first then i am a bird 🦢
// * answer: the pet const will call the constructor of the flamingo class which will first log "i'm pink 🌸" then it will call the super() method which calls the constructor of the bird class and logs "i am a bird 🦢".
