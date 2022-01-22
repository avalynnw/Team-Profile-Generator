// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const generateHtml = require('./src/generateHtml.js');
const generateCss = require('./src/generateCss.js');

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
}




const manager_questions = [ 
    { 
        type: 'input',
        message: "What is the name of the team manager?\n",
        name: 'manager_name',
        default: 'Jared',
    }
    ,
    { 
        type: 'number',
        message: "What is the team manager's employee ID number?\n",
        name: 'manager_ID',
        default: '1',
    }
    ,
    { 
        type: 'input',
        message: "What is the team manager's email?\n",
        name: 'manager_email',
        default: 'jared@fakemail.com',
    }
    ,
    { 
        type: 'number',
        message: "What is the team manager's office number?\n",
        name: 'manager_office_number',
        default: '1',
    }
];


const continue_questions = [ 
    {
        type: 'list',
        message: "Choose an option from the list below: \n",
        name: 'continue_choice',
        choices: [  "Add an Engineer",
                    "Add an Intern",
                    "Finish building my team"
        ],
    }
];


const engineer_questions = [ 
    { 
        type: 'input',
        message: "What is the name of the Engineer?\n",
        name: 'engineer_name',
        default: 'Ava',
    }
    ,
    { 
        type: 'number',
        message: "What is the Engineer's employee ID number?\n",
        name: 'engineer_ID',
        default: '2',
    }
    ,
    { 
        type: 'input',
        message: "What is the engineer's email?\n",
        name: 'engineer_email',
        default: 'avalynn@fakemail.com',
    }
    ,
    { 
        type: 'number',
        message: "What is the engineer's GitHub username?\n",
        name: 'engineer_github',
        default: 'avalynnw',
    }
];



const intern_questions = [ 
    { 
        type: 'input',
        message: "What is the name of the Intern?\n",
        name: 'intern_name',
        default: 'John',
    }
    ,
    { 
        type: 'number',
        message: "What is the Intern's employee ID number?\n",
        name: 'intern_ID',
        default: '5',
    }
    ,
    { 
        type: 'input',
        message: "What is the Intern's email?\n",
        name: 'intern_email',
        default: 'john@fakemail.com',
    }
    ,
    { 
        type: 'input',
        message: "What is the Intern's school?\n",
        name: 'intern_school',
        default: '2University',
    }
];








// Function to initialize app
async function init() {
    
    
    const manager_responses = await inquirer.prompt(manager_questions)
    const manager = new Manager(manager_responses.manager_name, parseInt(manager_responses.manager_ID), manager_responses.manager_email, parseInt(manager_responses.manager_office_number))
    manager_list.push(manager)
    //manager.print_info();

    continue_prompt();
    
}



// Lists of the manager, interns, and engineers
var manager_list = [];
var engineer_list = [];
var intern_list = [];



// Recursive looping function to gather information on the employees
async function continue_prompt() {

    var continue_response = await inquirer.prompt(continue_questions)

    // If an engineer or intern is added, the function calls itself to restart the loop
    if (continue_response.continue_choice == 'Add an Engineer') {
        // Run inquirer prompt to get intern info then generate a new intern object and add it to the array and loops back to the top of the function
        const engineer_response = await inquirer.prompt(engineer_questions)
        const engineer = new Engineer(engineer_response.engineer_name, parseInt(engineer_response.engineer_ID), engineer_response.engineer_email, engineer_response.engineer_github)
        engineer_list.push(engineer)
        continue_prompt();
    } else if (continue_response.continue_choice  == 'Add an Intern') {
        // Run inquirer prompt to get intern info then generate a new intern object and add it to the array and loops back to the top of the function
        const intern_response = await inquirer.prompt(intern_questions)
        const intern = new Intern(intern_response.intern_name, parseInt(intern_response.intern_ID), intern_response.intern_email, intern_response.intern_school)
        intern_list.push(intern)
        continue_prompt();
    } else {
        // Write to html and css files
        const css = generateCss();
        const html = generateHtml(manager_list, engineer_list, intern_list);
        writeToFile("./dist/assets/style.css", css);
        writeToFile("./dist/index.html", html);

        // Prints out employee list to console
        log_employees();
    }

}

// Function to log employee data to the console
function log_employees () {
    console.log('Manager:\n----------------------------\n')
    manager_list.forEach(function(item, index) {
        item.print_info()
        console.log('\n')
    });

    if (Array.isArray(engineer_list) && engineer_list.length) {
        console.log('Engineers:\n----------------------------\n')
        engineer_list.forEach(function(item, index) {
            item.print_info()
            console.log('\n')
        });
    }

    if(Array.isArray(intern_list) && intern_list.length) {
        console.log('Interns:\n----------------------------\n')
        intern_list.forEach(function(item, index) {
            item.print_info()
            console.log('\n')
        });
    }
}


// Function call to initialize app
init();


