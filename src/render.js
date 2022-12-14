export function generateHTML(fileName, data) {



    fs.appendFile(fileName, html);
}


function employeeHTML (employee) {
    let html = `
    <div style= "">
    <div>${employee.getName()}</div>
    <div>${employee.getRole()}</div>
    <div>${employee.getId()}</div>
    <div>${employee.getEmail()}</div>
    `
    if (employee.getRole() === "Manager") {
        html += `<div>${employee.officeNumber}</div>`
    }
    else if (employee.getRole() === "Intern") {
        html += `<div>${employee.school}</div>`
    }
    else if (employee.getRole() === "Engineer") {
        html += `<div>${employee.github}</div>`
    }
    html += `</div>`
    return html
}