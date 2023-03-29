const {
  myFileWriter,
  myFileReader,
  myFileUpdater,
  myFileDeleter,
} = require("./index.js");

const callBack = async () => {
  await myFileWriter("File.txt", "Hello");
  const fileContent = await myFileReader("File.txt");
  console.log(fileContent);
  await myFileUpdater("File.txt", " World");
  const updatedFileContent = await myFileReader("File.txt");
  console.log(updatedFileContent);
  await myFileDeleter("File.txt");
};

callBack();
