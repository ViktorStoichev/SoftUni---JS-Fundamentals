function companyUsers(array) {
  let allCompanies = {};

  for (let command of array) {
    let [companyName, employeeId] = command.split(" -> ");

    if (!allCompanies.hasOwnProperty(companyName)) {
      allCompanies[companyName] = [employeeId];
    } else {
      if (!allCompanies[companyName].includes(employeeId)) {
        allCompanies[companyName].push(employeeId);
      }
    }
  }

  let entries = Object.entries(allCompanies).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [company, employees] of entries) {
    console.log(company);

    for (let id of employees) {
      console.log(`-- ${id}`);
    }
  }
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111'])

// companyUsers([
//   'SoftUni -> AA12345',
//   'SoftUni -> BB12345',
//   'Microsoft -> CC12345',
//   'HP -> BB12345'])