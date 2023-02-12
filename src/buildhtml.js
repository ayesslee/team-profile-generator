const manGen = manager => {
    return `
    <li id="card">
          <div id="card-header">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
          </div>
          <div id="card-body">
            <div id="id">ID: ${manager.id}</div>
            <div id="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
            <div id="different">Office Number: ${manager.office}</div>
          </div>
    </li>
    `
  };
  
  const intGen = intern => {
    return `
    <li id="card">
          <div id="card-header">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
          </div>
          <div id="card-body">
            <div id="id">ID: ${intern.id}</div>
            <div id="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
            <div id="different">School: ${intern.school}</div>
          </div>
    </li>
    `
  };
  
  const engGen = engineer => {
    return `
    <li id="card">
          <div id="card-header">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
          </div>
          <div id="card-body">
            <div id="id">ID: ${engineer.id}</div>
            <div id="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
            <div id="different">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></div>
          </div>
    </li>
    `
  };
  
  const buildhtml = (data) => {
    employeeCards = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      switch (employee.getRole()) {
        case 'Manager':
          const manCard = manGen(employee);
          employeeCards.push(manCard);
          break
        case 'Engineer':
          const engCard = engGen(employee);
          employeeCards.push(engCard);
          break
        case 'Intern':
          const intCard = intGen(employee);
          employeeCards.push(intCard);
          break
      };
    };
  
    return htmlgen(employeeCards.join(''));
  };
  
  const htmlgen = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Site</title>
        <style>
        #header {
          display: flex;
          background-color: rgb(237, 103, 103);
          width: 100%;
          height: 150px;
          align-items: center;
          justify-content: center;
      }
      
      h1 {
          color: whitesmoke;
      }
      
      main {
          display: flex;
          justify-content: center;
          width: 100%;
      }
      
      #cards {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 50px;
          width: 100%;
          justify-content: center;
          padding-left: 0px;
      }
      
      #card {
          display: flex;
          flex-direction: column;
          width: 20%;
          background-color: rgb(239, 239, 239);
          border-radius: 2px;
          box-shadow: 5px 5px 5px grey;
          border-style: solid;
          border-width: 1px;
          border-color: rgb(198, 198, 198);
          list-style-type: none;
          margin: 20px;
      }
      
      #card-header {
          display: flex;
          flex-direction: column;
          background-color: rgb(52, 155, 245);
          width: 100%;
          color: whitesmoke;
          border-radius: 2px;
      
      }
      
      h2,
      h3 {
          margin: 5px 10px 15px 20px;
      }
      
      #card-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 35px 5px 35px 5px;
      }
      
      #id,
      #email,
      #different {
          border-style: solid;
          border-width: 1px;
          border-color: rgb(198, 198, 198);
          width: 80%;
          padding: 8px;
          background-color: whitesmoke;
      
      }
      </style>
      </head>
      <body>
        <header id="header">
          <h1>My Team</h1>
        </header>
        <main id="team">
          <ul id="cards">
            ${data}
          </ul>
        </main>
      </body>
    </html>
    `
  };
  
  module.exports = buildhtml;