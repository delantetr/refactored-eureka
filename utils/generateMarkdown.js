// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg)',
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `
  # ${data.title}

  ${licenseBadge}

`;
}

module.exports = generateMarkdown;
