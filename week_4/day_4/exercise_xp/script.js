const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// Convert this JS object into a JSON object.
const marioGameJSON = JSON.stringify(marioGame);
console.log("Regular JSON string:");
console.log(marioGameJSON);

// Convert and pretty print this JS object into a JSON object.
const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2);
console.log("\nPretty-printed JSON string:");
console.log(marioGamePrettyJSON);

// ? question: What happens to the nested objects ?
// * The nested objects are preserved in the JSON string format, maintaining their structure and hierarchy, the keya and values are wrapped in double quotes as per JSON standards.

// ? question: Check the values of the JSON object in the debugger.
// * The values of the JSON object in the debugger show escaped double quotes for strings and the overall structure is a single string representation of the original JavaScript object.

/* # marioGameJSON: '{"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}';


  # marioGamePrettyJSON: '{\n  "detail": "An amazing game!",\n  "characters": {\n    "mario": {\n      "description": "Small and jumpy. Likes princesses.",\n      "height": 10,\n      "weight": 3,\n      "speed": 12\n    },\n    "bowser": {\n      "description": "Big and green, Hates princesses.",\n      "height": 16,\n      "weight": 6,\n      "speed": 4\n    },\n    "princessPeach": {\n      "description": "Beautiful princess.",\n      "height": 12,\n      "weight": 2,\n      "speed": 2\n    }\n  }\n}';
 */
