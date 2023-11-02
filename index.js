// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is your project title?",
        type: "input"
    },
    {
        name: "Description",
        message: "What is your description of the project?",
        type: "input"
    },
    {
        name: "Installation",
        message: "What is your installation?",
        type: "input"
    },
    {
        name: "Usage",
        message: "What is your usage?",
        type: "input"
    },
    {
        name: "License",
        message: "What is your license?",
        type: "list",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            `BSD 2-Clause "Simplified" License`
        ]
    },
    {
        name: "Contributions",
        message: "What is your contributions",
        type: "input"
    },
    {
        name: "Tests",
        message: "What is your test",
        type: "input"
    },
    {
        name: "username",
        message: "What is your username?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input"
    }
];

// TODO: Create a function to write README file
// Below: reference the code.
// Below:  
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (error) =>
    error ? console.error(error) : console.log("File written successfully"));
}

// TODO: Create a function to initialize app
// Below: reference the code. 
function init() {
   inquirer.prompt(questions).then(response => {
    console.log(response);
    writeToFile("./examples/README.md", generateMarkdown(response));
    })
}

// Function call to initialize app
init();
