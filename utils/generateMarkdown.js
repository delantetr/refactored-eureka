// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GNU': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Eclipse': 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  return `
  # ${answers.title}

  ${licenseBadge}

  ## Description
  ${answers.description}

  ## Table of Contents 
  ${answers.toc}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${answers.license}

  ## How to Contribute
  ## Tests
  ## Questions
`;
}

module.exports = generateMarkdown;
