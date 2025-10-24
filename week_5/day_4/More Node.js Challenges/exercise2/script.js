const { minutesLived } = require("./date");

const prompt = require("prompt");

prompt.start();

prompt.get(["birthdate"], (err, result) => {
  if (err) {
    console.log(err);

    return;
  }

  console.log(minutesLived(result.birthdate));
});
