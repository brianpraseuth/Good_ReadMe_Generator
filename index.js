const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your application?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your application?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the uses of your application?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of license would you like to add to your application?",
        name: "license",
        choices: [
            "MIT",
            "Apache2.0"
        ]
    },
    {
        type: "input",
        message: "How can people contribute to your application?",
        name: "contribute"
    },
    {
        type: "input",
        message: "How can someone test your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "questions1"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "questions2"
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    
}

// Add a section that would append answers to README...
fs.appendFile("README.md", "Prompt answers?", function(err) {
    if (err) {
        console.log(err);
    }
})

// function to initialize program
// Is there something else that's supposed to go in to the init?
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown({...data}));
    });
}

// function call to initialize program
init();

// How to take the questions from the array and have them be prompted?

