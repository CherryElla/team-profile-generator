const fs = require("fs");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");

TESTDATA = {
    manager: new Manager("John Henry", 1, "man@ger.com", 123),
    interns: [
        new Intern("Helen Jane", 211, "email@email.com", "University of Here"),
        new Intern("Tom Ball", 332, "email@email.com", "University of Here"),
        new Intern("George Stern", 23, "email@email.com", "University of Here"),
        new Intern("Rose Elle", 333, "email@email.com", "University of Here"),
    ],
    engineers: [
        new Engineer("Harriet Lang", 222, "email@email.com", "github"),
        new Engineer("Joe Pool", 44, "email@email.com", "github"),
        new Engineer("Fanny Fren", 422, "email@email.com", "github"),
        new Engineer("Steven Hopp", 42, "email@email.com", "github"),
    ],
}

function generateHTML(fileName, data) {
    let html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <title>MY TEAM</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-primary sticky-top"><p class="mx-auto fw-bold fs-1">MY TEAM</p></nav>
        <div
            style="
                height: 1000px;
                background-color: aliceblue;
                padding-top: 50px;
                align-items: center;
            "
        >
        <div style="width: 1500px; height: auto; position: relative; margin: 0 auto;"></div>` ;
        
        html += '<div class="row row-cols-2 row-cols-md-4 g-4">'
        html = html + employeeHTML(data.manager);
        for(let intern of data.interns) {
            html += employeeHTML(intern)
        }
        for(let engineer of data.engineers) {
            html += employeeHTML(engineer)
        }
        html += '</div>'
        
    html += "</div> </body><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'></script></html>";
    fs.writeFile(fileName, html, (err) =>
    err ? console.error(err) : console.log("Your Index.html is created!"));
}

function employeeHTML(employee) {
    let html = `
    <div class="col"><div class="card shadow p-3 mb-5 bg-body rounded"><div class="card-body">
    <h3 class="card-title">${employee.getName()}</h3>
    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
    <hr class="border border-primary border-2 opacity-50"></hr>
    <p class="card-text">
    <small class="text-muted">ID</small><br>
    ${employee.getId()}
    </p>
    <p class="card-text">
    <small class="text-muted">EMAIL</small><br>
    ${employee.getEmail()}
    </p>
    `;
    if (employee.getRole() === "Manager") {
        html += `<p class="card-text">
        <small class="text-muted">OFFICE</small><br>
        ${employee.officeNumber}
        </p>`;
    } else if (employee.getRole() === "Intern") {
        html += `<p class="card-text">
        <small class="text-muted">SCHOOL</small><br>
        ${employee.school}
        </p>`;
    } else if (employee.getRole() === "Engineer") {
        html += `<p class="card-text">
        <small class="text-muted">GITHUB</small><br>
        ${employee.github}
        </p>`;
    }
    html += `</div></div></div>`;
    return html;
}

module.exports = {TESTDATA, generateHTML};