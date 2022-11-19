const generateReadme = require('./utils/generateMarkdown.js');
const axios = require("axios");
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is title of your repository?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a table of content: ',
        name: 'table of content'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'Please give us your GitHub profile link.',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Choose a license for your repository',
        name: 'license',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        message: "Write a brief description of your project: ",
        name: "description",
    },
    {
        type: "input",
        message: "Please state any test(s) required: ",
        name: "test",
    },
    {
        type: "input",
        message: "Please state if others can contribute: ",
        name: "contributors",
    }
];

// TODO: Create a function to write README file
const writeToFile = data  => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: console.log('File created!')
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();

const userName = questions.userName

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
  console.log(questions.data);
});
