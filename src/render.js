export function generateHTML(fileName, data) {
    `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MY TEAM</title>
    </head>
    <body>
        <header
            style="
                font-size: 50px;
                letter-spacing: 3px;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
                    sans-serif;
                text-align: center;
                color: rgb(26, 40, 229);
                background-color: aquamarine;
                height: 90px;
                padding: 55px;
                border-radius: 20px;
                position: relative;
            "
        >
            MY TEAM
        </header>
        <div
            style="
                height: 1000px;
                background-color: aliceblue;
                padding-top: 50px;
                align-items: center;
            "
        ><div style="width: 1500px; height: auto; position: relative; margin: 0 auto;">sdf</div></div>
    </body>
</html>`




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