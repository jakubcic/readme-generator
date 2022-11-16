const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please provide a title for your project.",
    name: "title"
  },
  {
    type: "input",
    message: "Please provide a description.",
    name: "description"
  },
  {
    type: "input",
    message: "Please provide installation instructions.",
    name: "installInstructions"
  },
  {
    type: "input",
    message: "Please provide usage details. How do you use this application?",
    name: "usageDetails"
  },
  {
    type: "input",
    message: "Please provide gudielines for contributing to this project.",
    name: "contribute"
  },
  {
    type: "input",
    message: "Please provide instructions for testing this application.",
    name: "test"
  },
  {
    type: "list",
    message: "Please select the license you wish you use for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license"
  },
  {
    type: "input",
    message: "Please provide your GitHub username.",
    name: "userName"
  },
  {
    type: "input",
    message: "Please provide your email.",
    name: "userEmail"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => 
    err ? console.error(err) : console.log(`Contents have been written to ${fileName}.`)
  );
};

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  const readmeContent = generateMarkdown(answers);
  writeToFile("./data/README.md", readmeContent);
};

// Function call to initialize app
init();
