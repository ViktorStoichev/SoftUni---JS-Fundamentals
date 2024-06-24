function bonusScoringSystem(array) {
  let studentsCount = Number(array.shift());
  let courseLectures = Number(array.shift());
  let additionalBonus = Number(array.shift());
  let totalBonus = 0;
  array = array.map(Number);
  let allBonuses = [];
  let maxBonus = Number.MIN_SAFE_INTEGER;
  let student = 0;

  for (let i = 0; i < studentsCount; i++) {

    totalBonus = Math.round(array[i] / courseLectures * (5 + additionalBonus));
    allBonuses.push(totalBonus);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      student = array[i];
    }
  }

  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${student} lectures.`);
}

// bonusScoringSystem([
//   '5',  '25', '30',
//   '12', '19', '24',
//   '16', '20'])

bonusScoringSystem([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'])