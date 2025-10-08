const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

let userInputs = {};
let lastStoryIndex = -1;

const stories = [
  (noun, adjective, person, verb, place) =>
    `${person} decided to ${verb} a ${adjective} ${noun} in the middle of ${place}. It was quite a sight!`,
  (noun, adjective, person, verb, place) =>
    `Once upon a time in ${place}, a ${adjective} ${noun} was seen with ${person}. They were trying to ${verb} away from everyone.`,
  (noun, adjective, person, verb, place) =>
    `At ${place}, ${person} found a ${adjective} ${noun} and decided to ${verb} with it all day long.`,
];

function generateStory(event) {
  if (event) event.preventDefault();

  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;
  const verb = document.getElementById('verb').value;
  const place = document.getElementById('place').value;

  if (!noun || !adjective || !person || !verb || !place) {
    storySpan.textContent = 'Please fill out all the fields.';
    return;
  }

  userInputs = { noun, adjective, person, verb, place };

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * stories.length);
  } while (stories.length > 1 && randomIndex === lastStoryIndex);

  lastStoryIndex = randomIndex;
  const story = stories[randomIndex](noun, adjective, person, verb, place);
  storySpan.textContent = story;
}

function shuffleStory() {
  if (Object.keys(userInputs).length === 0) {
    storySpan.textContent = 'Please generate a story first before shuffling.';
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * stories.length);
  } while (stories.length > 1 && randomIndex === lastStoryIndex);

  lastStoryIndex = randomIndex;
  const story = stories[randomIndex](
    userInputs.noun,
    userInputs.adjective,
    userInputs.person,
    userInputs.verb,
    userInputs.place
  );
  storySpan.textContent = story;
}

form.addEventListener('submit', generateStory);
shuffleButton.addEventListener('click', shuffleStory);
