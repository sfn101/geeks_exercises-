// Daily Challenge: Words in a Frame

function wordsInFrame() {
  const userInput = prompt('Enter several words, separated by commas:');
  if (!userInput) {
    console.log('No input provided.');
    return;
  }

  const words = userInput.split(',').map(word => word.trim());
  if (words.length === 0 || (words.length === 1 && words[0] === '')) {
    console.log('No words to display.');
    return;
  }

  let maxLength = 0;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  const border = '*'.repeat(maxLength + 4);

  console.log(border);

  for (const word of words) {
    const padding = ' '.repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
  }

  console.log(border);
}

wordsInFrame();
