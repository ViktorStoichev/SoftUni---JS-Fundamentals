function softUniReception(array) {
  let allStudents = array.pop();
  let allEmployeesEfficiency = array.map(Number)

  let answeredQuestionsPerHour = 0;
  for (let employeeEfficiency of allEmployeesEfficiency) {
    answeredQuestionsPerHour += employeeEfficiency;
  }

  let hoursNeeded = Math.ceil(allStudents / answeredQuestionsPerHour);

  if (hoursNeeded % 4 == 0) {
    let breaksNeeded = hoursNeeded / 4;
    hoursNeeded += breaksNeeded;
  }

  console.log(`Time needed: ${hoursNeeded}h.`);
}

softUniReception(['3','2','5','40'])