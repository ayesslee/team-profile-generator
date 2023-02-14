// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const buildhtml = require('./src/buildhtml');

const myTeam = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email."
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter the manager's office number."
    }
]

const employeeRole = [
    {
        type: 'list',
        message: 'Add employee',
        name: 'role',
        choices: ['Engineer', 'Intern', 'None']
    }
]

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email."
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the employee's school."
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the employee's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email."
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the employee's github."
    }
]

function teamtime() {
    inquirer
        .prompt(employeeRole)
        .then(response => {
            switch (response.role) {
                case 'Engineer':
                    engineertime();
                    break
                case 'Intern':
                    interntime();
                    break
                case 'None':
                    starthtml();
                    break
            };
        });
};

function managertime() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const { name, id, email, office } = response;
            const manager = new Manager(name, id, email, office);
            myTeam.push(manager);
            teamtime();
        });
};

function interntime() {
    inquirer
        .prompt(InternQuestions)
        .then(response => {
            const { name, id, email, school } = response;
            const intern = new Intern(name, id, email, school);
            myTeam.push(intern);
            teamtime();
        });
};

function engineertime() {
    inquirer
        .prompt(engineerQuestions)
        .then(response => {
            const { name, id, email, github } = response;
            const engineer = new Engineer(name, id, email, github);
            myTeam.push(engineer);
            teamtime();
        });
};

function starthtml() {
    fs.appendFile('./dist/index.html', buildhtml(myTeam), (err) => err ? console.error(err) : console.log('Generating HTML.'));
};

managertime();