const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  await fs.writeFile(fileName, fileContent);
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const fileContent = await fs.readFile(fileName, "utf8");
  return fileContent;
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  const oldContent = await myFileReader(fileName);
  const updatedContent = oldContent + fileContent;
  await myFileWriter(fileName, updatedContent);
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  await fs.unlink(fileName);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
