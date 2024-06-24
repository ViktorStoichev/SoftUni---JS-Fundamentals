function mining(input) {
  let index = 0;
  let gramsPerDay = Number(input[0]);
  let day = 0;
  let bitcoinPrice = 11949.16;
  let money = 0;
  let bitcoin = 0;
  let firstBitcoinDay = 0;

  while (index < input.length) {
    let goldGrams = Number(input[index]);
    day++;
    if (day % 3 == 0) {
      goldGrams -= goldGrams * 0.30;
    }
    money += goldGrams * 67.51;

    if (money >= bitcoinPrice) {
      while (money >= bitcoinPrice) {
        bitcoin++;

        money -= bitcoinPrice;
        if (bitcoin == 1) {
          firstBitcoinDay = day;
        }
      }
    }

    gramsPerDay = Number(input[0]);
    index++;
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (firstBitcoinDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

mining([100,200,300])
mining([50,100])
mining([3124.15, 504.212, 2511.124])