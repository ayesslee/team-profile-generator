const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const buildhtml = require('./src/buildhtml');

const team = [];

const managerInput = [
    {
        type: 'input',
        name: 'name',
        message: "Manager's name:"
    },
    {
        type:'input',
        name: 'id',
        message: "Manager's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Manager's email:"
    },
    {
        type: 'input',
        name: 'office',
        message: "Manager's office number:"
    }
]

const employeeAdd = [
    {
        type: 'list',
        message: 'Add employee',
        name: 'role',
        choices: ['Engineer', 'Intern', 'None']
    }
]

const InternInput = [
    {
        type: 'input',
        name: 'name',
        message: "Employee's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee's ID:"
    },
    {
        type:'input',
        name: 'email',
        message: "Employee's email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Employee's school:"
    }
]

const engineerInput = [
    {
        type: 'input',
        name: 'name',
        message: "Employee's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee's email:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Employee's github:"
    }
]

function teamtime() {
    inquirer
        .createPromptModule(employeeAdd)
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
        .createPromptModule(managerInput)
        .then(response => {
            const { name, id, email, office } = response;
            const manager = new Manager(name, id, email, office);
            team.push(manager);
            teamtime();
        });
};

function interntime() {
    inquirer
        .createPromptModule(InternInput)
        .then(response => {
            const { name, id, email, school } = response;
            const intern = new Intern(name, id, email, school);
            team.push(intern);
            teamtime();
        });
};

function engineertime() {
    inquirer
        .createPromptModule(engineerInput)
        .then(response => {
            const { name, id, email, github } = response;
            const engineer = new Engineer(name, id, email, github);
            team.push(engineer);
            teamtime();
        });
};

function starthtml() {
    fs.appendFile('./dist/index.html', buildhtml(team), 
    (err => err ? console.error(err) : console.log('Generating HTML.')));
};

managertime();