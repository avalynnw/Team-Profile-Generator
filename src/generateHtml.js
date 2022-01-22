// Required packages
const fs = require('fs');
const path = require('path');



function generateHtml(manager_list, engineer_list, intern_list) {
    let html_string = `<!DOCTYPE html>

    <html lang="en-us">
    
        <head>
            <title>My Team</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./assets/style.css" />
        </head>
    \n`;

    html_string += `    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="row">\n`


    for (const element of manager_list) {
        html_string += `\t	<div class="col-sm-4">
        <div class="card mt-2 mb-3">
        <div class="card-header">
            Manager: ${element.name}
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                <li class="list-group-item">Office Number: ${element.office_number}</li>
              </ul>
        </div>
    </div>
</div>\n`
    }


    for (const element of engineer_list) {
        html_string +=`\t<div class="col-sm-4">
        <div class="card mt-2 mb-3">
            <div class="card-header">
                Engineer: ${element.name}
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${element.github}" target="blank">${element.github}</a></li>
                  </ul>
            </div>
        </div>
    </div>\n`
    }




    for (const element of intern_list) {
        html_string +=`\t<div class="col-sm-4">
        <div class="card mt-2 mb-3">
            <div class="card-header">
                Intern: ${element.name}
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${element.email}">${element.email}</a></li>
                    <li class="list-group-item">School: ${element.school}</li>
                  </ul>
            </div>
        </div>
    </div>\n`
    }




    html_string += `\t</main>
</body>\n`;

    html_string += `</html>`;

    return html_string;    
}


module.exports = generateHtml;