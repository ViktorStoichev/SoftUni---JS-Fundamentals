function minerTask(array) {
  let allResources = {};

  for (let i = 0; i < array.length; i += 2) {
    let resource = array[i];
    let quantity = Number(array[i + 1]);

    if (!allResources.hasOwnProperty(resource)) {
      allResources[resource] = quantity;
    } else {
      allResources[resource] += quantity;
    }
  }

  let entries = Object.entries(allResources);

  for (let [resource, quantity] of entries) {
    console.log(`${resource} -> ${quantity}`);
  }
}

minerTask([
  'Gold',
  '155',
  'Silver',
  '10',
  'Copper',
  '17'])