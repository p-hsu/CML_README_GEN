// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown.js');
// const generateMarkdown = require('./utils/generateMarkdown.js');

const licenseArray = ['MIT', 'BSD', 'Apache-2.0', 'GPL', 'None']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project >',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project >',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter information about installation requirements >',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter text to denote in code for installation requirements  >',
        name: 'installationCode',
    },
    {
        type: 'input',
        message: 'Enter information about usage guidelines for your code >  ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter text to denote in code for usage guidelines for your code >  ',
        name: 'usageCode',
    },
    {
        type: 'list',
        message: 'Choose from the following optins to generate license badges >',
        choices: licenseArray,
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter information on options to contribute to this project >',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter information about testing the source code >',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter text to denote in code for  testing your source code >',
        name: 'testCode',
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
// function writeToFile(filePath, response) {
//     filePath = 'README.md'
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, response, (err) => {
//             if ((err)) {
//                 reject(console.error(err));
//                 return;
//             }
//             resolve('README.md');
//         });
//     });
// };

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then( (response) => {
            // writeToFile();
            const populateMd = genMd(response)
            fs.writeFile('README.md', populateMd, (err) =>
            err ? console.error(err) : console.log('Prompts completed!'))
            console.log(response);
        });
}

// Function call to initialize app
init();
