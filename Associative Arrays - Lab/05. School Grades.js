function checkSchoolGrades(array) {

  let studentBook = {};

  for (let studentInfo of array) {
    studentInfo = studentInfo.split(" ");
    let name = studentInfo.shift();
    let grades = studentInfo.join(" ");

    if (!studentBook.hasOwnProperty(name)) {
      studentBook[name] = grades;
    }else {
      studentBook[name] += ` ${grades}`;
    }
  }

  let sortedBook = Object.entries(studentBook).sort((a, b) => a[0].localeCompare(b[0]))

  for (let currPerson of sortedBook) {
    let currGrades = currPerson[1].split(" ").map(Number);
    let sum = 0;
    for (let number of currGrades) {
      sum += number;
    }

    let avGrade = sum / currGrades.length;
    
    console.log(`${currPerson[0]}: ${avGrade.toFixed(2)}`);
  }
}

checkSchoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)