function adAstra(string) {
  let pattern = /([\|#])(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
  let validCommand = null;
  let totalKcal = 0;
  let info = [];

  while ((validCommand = pattern.exec(string)) !== null) {
    totalKcal += Number(validCommand.groups.kcal);
    info.push(validCommand.groups);
  }
  
  let days = Math.floor(totalKcal / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  for (let el of info) {
    console.log(`Item: ${el.item}, Best before: ${el.date}, Nutrition: ${el.kcal}`);
  }
}

// adAstra([

//   '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])