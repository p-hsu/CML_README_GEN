let badge
let link
let licenseSection

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (true) {
        // If MIT is chosen
        case license == 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;

        // If BSD is chosen
        case license == 'BSD':
            badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;

        // If Apache-2.0 is chosen
        case license == 'Apache-2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;

        // If GPL is chosen
        case license == 'GPL':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
            break;

        // If None is chose
        case license == 'None':
            badge = ''
            break;

        default:
            badge = ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (true) {
        // If MIT is chosen
        case license == 'MIT':
            link = 'https://opensource.org/licenses/MIT';
            licenseSection = 'This project is licensed under [MIT]('+ link + ').';
            break;
        // If MIT is chosen
        case license == 'BSD':
            link = 'https://opensource.org/licenses/BSD-3-Clause';
            licenseSection = 'This project is licensed under [BSD]('+ link + ').';
            break;
        // If MIT is chosen
        case license == 'Apache-2.0':
            link = 'https://opensource.org/licenses/Apache-2.0';
            licenseSection = 'This project is licensed under [Apache 2.0]('+ link + ').';
            break;
        // If MIT is chosen
        case license == 'GPL':
            link = 'https://www.gnu.org/licenses/gpl-3.0';
            licenseSection = 'This project is licensed under [GPL]('+ link + ').';
            break;

        // If none
        case license == 'None':
            licenseSection = 'This project is not licensed.';
            break;

        default:
            licenseSection = ''
    }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, installationCode, usage, usageCode, license, contributing, test, testCode, github, email }) => {
    renderLicenseBadge(license);
    // renderLicenseLink(license);
    renderLicenseSection(license);

    return`
**PLEASE NOTE THAT THIS FILE GENERATES A TEMPLATE. PLEASE EDIT AND BUILD UPON THIS FILE TO REFLECT THE PARAMETERS OF YOUR PROJECT.**
*For markdown syntax, please refer to [**THIS**](https://www.markdownguide.org/) link. Don't forget to delete these lines in your final draft!*
****

# ${title}
${badge}


## Project description

${description}

## Table of Content
- [Installation](#Installation)
- [Usage](#Usage)
- Testing(#Testing)
- License (#License)
- Contributions (#Contributions)
- Questions (#Questions)

## Installation

The following requirements are necessary to run this application:

*${installation}\n
\`${installationCode}\`

## Usage

*${usage}\n
\`${usageCode}\`

## Testing

${test}\n
\`${testCode}\`

## License
${licenseSection}

## Contributions
${contributing}

## Questions
If you have any questions for me, you can find me on [Github](https://www.github/${github}) or email me at ${email}.

  `
}

module.exports = generateMarkdown;

