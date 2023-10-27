// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "project title",
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
        choice: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            `BSD 2-Clause "Simplified" License`
        ]
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
    },
    {

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
