const questions = [
    "what i learn today?",
    "what made me upset? and how i can deal with it?",
    "what made me happy today?",
    "what is my plan for tomorrow?",
    "how many people i helped today?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n 
${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});


process.on("exit", () => {
    console.log(`
    Thank you for your answers.

    What you learned today is: ${answers[0]}

    What made you upset today is: ${answers[1]}

    What made you happy today is: ${answers[2]}

    Your plan for tomorrow is: ${answers[3]}

    You helped ${answers[4]} people today.

    Thanks for your time.
    Come back tomorrow to do this again.

    `)
});