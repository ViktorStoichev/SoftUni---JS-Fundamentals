function extractFile(pathToFile) {
  let filesArray = pathToFile.split("\\");
  let file = filesArray.pop();
  let extensionIndex = file.lastIndexOf(".");
  let extension = file.slice(extensionIndex + 1, file.length);
  file = file.split("").splice(0, extensionIndex).join("")
  console.log(`File name: ${file}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')