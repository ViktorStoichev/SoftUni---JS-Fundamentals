function vacation(peopleCount,type,day) {
  let totalPrice = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          totalPrice = 8.45 * peopleCount;
          if (peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
          }
          break;
        case "Saturday":
          totalPrice = 9.80 * peopleCount;
          if (peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
          }
          break;
        case "Sunday":
          totalPrice = 10.46 * peopleCount;
          if (peopleCount >= 30) {
            totalPrice -= totalPrice * 0.15;
          }
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          totalPrice = 10.90 * peopleCount;
          if (peopleCount >= 100) {
            totalPrice = 10.90 * (peopleCount - 10);
          }
          break;
        case "Saturday":
          totalPrice = 15.60 * peopleCount;
          if (peopleCount >= 100) {
            totalPrice = 15.60 * (peopleCount - 10);
          }
          break;
        case "Sunday":
          totalPrice = 16 * peopleCount;
          if (peopleCount >= 100) {
            totalPrice = 16 * (peopleCount - 10);
          }
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          totalPrice = 15 * peopleCount;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
          }
          break;
        case "Saturday":
          totalPrice = 20 * peopleCount;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
          }
          break;
        case "Sunday":
          totalPrice = 22.50 * peopleCount;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice -= totalPrice * 0.05;
          }
          break;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")