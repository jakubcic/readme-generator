// this function returns the badge based on the users selection that's passed to it as an argument
// the badge will link to the choosealicense.com page for that specific license!
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return `[![${license} badge](https://img.shields.io/badge/license-AGPLv3-brightgreen.svg)](https://choosealicense.com/licenses/agpl-3.0/)`;
  } 
  else if (license === "GNU GPLv3") {
    return `[![${license} badge](https://img.shields.io/badge/license-GPLv3-brightgreen.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
  } 
  else if (license === "GNU LGPLv3") {
    return `[![${license} badge](https://img.shields.io/badge/license-LGPLv3-brightgreen.svg)](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } 
  else if (license === "Mozilla Public License 2.0") {
    return `[![${license} badge](https://img.shields.io/badge/license-MPL_2.0-orange.svg)](https://choosealicense.com/licenses/mpl-2.0/)`;
  } 
  else if (license === "Apache License 2.0") {
    return `[![${license} badge](https://img.shields.io/badge/license-Apache_2.0-red.svg)](https://choosealicense.com/licenses/apache-2.0/)`;
  } 
  else if (license === "MIT License") {
    return `[![${license} badge](https://img.shields.io/badge/license-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  } 
  else if (license === "Boost Software License 1.0") {
    return `[![${license} badge](https://img.shields.io/badge/license-Boost_1.0-blue.svg)](https://choosealicense.com/licenses/bsl-1.0/)`;
  } 
  else if (license === "The Unlicense") {
    return `[![${license} badge](https://img.shields.io/badge/license-The_Unlicense-blueviolet.svg)](https://choosealicense.com/licenses/unlicense/)`;
  } 
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installInstructions}

## Usage
${data.usageDetails}

## Contributing
${data.contribute}

## Tests
${data.test}

## License
This application is covered under the following license:
${data.license}

## Questions
If you have any questions please reach out to me. 
<br>
Check out my [GitHub profile](https://github.com/${data.userName}).
<br>
Send me an email: [${data.userEmail}](mailto:${data.userEmail})

`;
}

module.exports = generateMarkdown;
