// Include packages needed for this application
const { ENGINE_METHOD_CIPHERS } = require('constants');
const inquirer = require('inquirer');
const { array } = require('yargs');



const manager_questions = [ 
    { 
        type: 'input',
        message: "What is the name of the team manager?\n",
        name: 'manager_name',
        default: 'Jared',
    }
    ,
    { 
        type: 'input',
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
        type: 'input',
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
        default: 'Alec',
    }
    ,
    { 
        type: 'input',
        message: "What is the Engineer's employee ID number?\n",
        name: 'engineer_ID',
        default: '2',
    }
    ,
    { 
        type: 'input',
        message: "What is the engineer's email?\n",
        name: 'engineer_email',
        default: 'alec@fakemail.com',
    }
    ,
    { 
        type: 'input',
        message: "What is the engineer's GitHub username?\n",
        name: 'engineer_github',
        default: 'ibealec',
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
        type: 'input',
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






// Class declarations
class Manager {
    constructor(manager_name, manager_ID, manager_email, manager_office_number) {
        this.manager_name = manager_name;
        this.manager_ID = manager_ID;
        this.manager_email = manager_email;
        this.manager_office_number = manager_office_number;
        this.print_info = () => {
            console.log(`Name: ${this.manager_name}`)
            console.log(`ID: ${this.manager_ID}`)
            console.log(`Email: ${this.manager_email}`)
            console.log(`Office #: ${this.manager_office_number}`)
        }
    }
}


class Engineer {
    constructor(engineer_name, engineer_ID, engineer_email, engineer_github) {
        this.engineer_name = engineer_name;
        this.engineer_ID = engineer_ID;
        this.engineer_email = engineer_email;
        this.engineer_github = engineer_github;
        this.print_info = () => {
            console.log(`Name: ${this.engineer_name}`)
            console.log(`ID: ${this.engineer_ID}`)
            console.log(`Email: ${this.engineer_email}`)
            console.log(`GitHub Username: ${this.engineer_github}`)
        }
    }
}


class Intern {
    constructor(intern_name, intern_ID, intern_email, intern_school) {
        this.intern_name = intern_name;
        this.intern_ID = intern_ID;
        this.intern_email = intern_email;
        this.intern_school = intern_school;
        this.print_info = () => {
            console.log(`Name: ${this.intern_name}`)
            console.log(`ID: ${this.intern_ID}`)
            console.log(`Email: ${this.intern_email}`)
            console.log(`School: ${this.intern_school}`)
        }
    }
}





// Function to initialize app
async function init() {
    
    
    const manager_responses = await inquirer.prompt(manager_questions)
    const manager = new Manager(manager_responses.manager_name, manager_responses.manager_ID, manager_responses.manager_email, manager_responses.manager_office_number)
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
        const engineer_response = await inquirer.prompt(engineer_questions)
        const engineer = new Engineer(engineer_response.engineer_name, engineer_response.engineer_ID, engineer_response.engineer_email, engineer_response.engineer_github)
        engineer_list.push(engineer)
        continue_prompt();
    } else if (continue_response.continue_choice  == 'Add an Intern') {
        const intern_response = await inquirer.prompt(intern_questions)
        const intern = new Intern(intern_response.intern_name, intern_response.intern_ID, intern_response.intern_email, intern_response.intern_school)
        intern_list.push(intern)
        continue_prompt();
    } else {
        log_employees();
    }

}

// Function to log employee data to the console
function log_employees () {
    console.log('Manager:\n----------------------------\n')
    manager_list.forEach(function(item, index) {
        item.print_info();
        console.log('\n')
    });

    if (Array.isArray(engineer_list) && engineer_list.length) {
        console.log('Engineers:\n----------------------------\n')
        engineer_list.forEach(function(item, index) {
            item.print_info();
            console.log('\n')
        });
    }

    if(Array.isArray(intern_list) && intern_list.length) {
        console.log('Interns:\n----------------------------\n')
        intern_list.forEach(function(item, index) {
            item.print_info();
            console.log('\n')
        });
    }
}


// Function call to initialize app
init();


