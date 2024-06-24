function requiredReading(numOfPages,pagesPerHour,daysGoal) {
  let hoursPerDayNeeded = (numOfPages / pagesPerHour) / daysGoal;

  console.log(hoursPerDayNeeded);
}

requiredReading(212,20,2)
requiredReading(432,15,4)