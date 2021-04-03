// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, installationCode,  usage, usageCode,  license, contributing, test, testCode, github, email }) => {
  return`
# ${title}

## Project description
${description}

## Installation
The following requirements are necessary to run this application:

**${installation}**\n
\`${installationCode}\`

## Usage
**${usage}**\n
\`${usageCode}\`

## Testing
${test}
\`${testCode}\`

## License
This project is licensed under ${license}.

## Contributions
${contributing}

## Questions
If you have any questions for me, you can find me on [Github](https://www.github/${github}) or email me at ${email}.

  `
}

module.exports = generateMarkdown;

// const markdown = 'I love it!';

// module.exports = genMd;
