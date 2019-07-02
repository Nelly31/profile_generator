const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answered = [];

rl.question("What's your name? Nicknames are also acceptable 🙂 ", (answer) => {
    answered.push(answer);
    rl.question("What's an activity you like doing? ", (answer) => {
        answered.push(answer);
        rl.question("What do you listen to while doing that? ", (answer) => {
            answered.push(answer);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
                answered.push(answer);
                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    answered.push(answer);
                    rl.question("Which sport is your absolute favourite? ", (answer) => {
                        answered.push(answer);
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                            answered.push(answer);
                            console.log(`${answered[0]} loves to ${answered[1]} while listening to ${answered[2]}. Their favourite meal is ${answered[3]} and favourite food is ${answered[4]}. They absolutely enjoy ${answered[5]}. Their superpower is ${answered[6]}. How cool! 😎`);
                            rl.close();
                          });
                    });
                });
            });
        });
    });
});
