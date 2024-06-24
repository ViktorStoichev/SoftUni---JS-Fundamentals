function employeesList(array) {

  for (let employee of array) {

    let info = {
      employeeName: employee,
      personalNumber: employee.length
    }

    console.log(`Name: ${info.employeeName} -- Personal Number: ${info.personalNumber}`);
  }
}

// employeesList([
//   'Silas Butler',
//   'Adnaan Buckley',
//   'Juan Peterson',
//   'Brendan Villarreal'])

employeesList([
  'Samuel Jackson',
  'Will Smith',
  'Bruce Willis',
  'Tom Holland'])