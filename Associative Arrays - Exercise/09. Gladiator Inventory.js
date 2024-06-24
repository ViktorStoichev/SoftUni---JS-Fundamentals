function gladiatorInventory(array) {
  let inventory = array.shift().split(" ");

  for (let el of array) {
    let [command, item] = el.split(" ");

    switch (command) {
      case "Buy":
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case "Trash":
        if (inventory.includes(item)) {
          inventory.splice(inventory.indexOf(item), 1);
        }
        break;
      case "Repair":
        if (inventory.includes(item)) {
          inventory.splice(inventory.indexOf(item), 1);
          inventory.push(item);
        }
        break;
      case "Upgrade":
        let [equipment, upgrade] = item.split("-");
        if (inventory.includes(equipment)) {
          inventory.splice(inventory.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`);
        }
        break;
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])