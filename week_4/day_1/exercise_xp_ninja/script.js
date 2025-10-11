// mergeWords

const mergeWords = (word) => (nextWord) =>
    nextWord ? mergeWords(`${word} ${nextWord}`) : word;


const sentence1 = mergeWords('There')('is')('no')('spoon.')('in')('Neo')('handsome')();
console.log(sentence1);

const sentence2 = mergeWords('Hello')();
console.log(sentence2); 