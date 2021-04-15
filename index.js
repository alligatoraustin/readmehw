// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name:'description',
        message:'Enter a description.',
    },
    {
        name:'title',
        message:'Title of app.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const string = generateMarkdown(answers)
        console.log(string)
        console.log(answers) //once we have the answers we will use the genmrkdwn function to create a readme string then we will use the fs package to write to a new file 'readme.md' supply this file the genmrk string
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();