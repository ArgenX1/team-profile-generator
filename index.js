const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const genHTML = require('./util/generateHtml');
const team = []

// builds team array
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'questions',
            message: 'Lets begin setting up your team!',
            choices: ['Create Team', 'Exit']
        }
    ]).then(answers => {
        switch (answers.questions) {
            case 'Create Team':
                console.log('Lets do this!');
                // TODO: write code to build team

                break;
        
            default:
                console.log('Goodbye!');
                break;
        }
    })
}

// helper functions to create different team members
function createManager() {
    inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the Project Manager?'
       },
       {
           type: 'input',
           name: 'id',
           message: 'What is his/her ID number?'
       },
       {
           type: 'input',
           name: 'officeNumber',
           message: 'What office are they in?'
       },
       {
           type: 'input',
           name: 'email',
           message: 'Email address?'
       }
    ]).then(({name, id, officeNumber, email}) => {
       const manager = new Manager(name, id, email, officeNumber);
       team.push(manager);
       console.log(team);
       return;
   })     

}

function createEngineer() {
    inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the Engineer?'
       },
       {
           type: 'input',
           name: 'id',
           message: 'What is his/her ID number?'
       },
       {
           type: 'input',
           name: 'github',
           message: 'What is their GitHub account name?'
       },
       {
           type: 'input',
           name: 'email',
           message: 'Email address?'
       }
    ]).then(({name, id, github, email}) => {
       const engineer = new Engineer(name, id, email, github);
       team.push(engineer);
       console.log(team);
   })     

}

function createIntern() {
    inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the Intern?'
       },
       {
           type: 'input',
           name: 'id',
           message: 'What is his/her ID number?'
       },
       {
           type: 'input',
           name: 'school',
           message: 'What school did they go to?'
       },
       {
           type: 'input',
           name: 'email',
           message: 'Email address?'
       }
    ]).then(({name, id, school, email}) => {
       const intern = new Intern(name, id, email, school);
       team.push(intern);
       console.log(team);
   })     

}

createTeam()

