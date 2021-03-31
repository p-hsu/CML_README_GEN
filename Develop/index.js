// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const genMd = require('./utils/generateMarkdown.js');
// checking modularization
// console.log(genMd);
const licenseArray = ['MIT', '']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please input the title of your project >',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Input markdown for the "Description" section of your file.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Input markdown for the "Installation" section of your file.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Input markdown for the "Usage" section of your file.',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose from the following optins to generate license badges >',
        choices: licenseArray,
        name: 'license',
    },
    {
        type: 'input',
        message: 'Input markdown for the "Contributing" section of your file.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Input markdown for the "Tests" section of your file.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your Github username >',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address >',
        name: 'email',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then( (response) => {
            console.log(response);
        });
}

// Function call to initialize app
init();
