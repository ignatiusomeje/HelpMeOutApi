const { existsSync } = require("node:fs");
const fs = require("fs");
const asyncFs = require("fs").promises;

const saveToFile = async (data, id) => {
  try {
    const folderExists = existsSync("./dB");
    if (!folderExists) {
      fs.mkdirSync("./dB");
    }
    const exists = existsSync(`./dB/${id}.json`);
    if (!exists) {
      let init = [];
      init.push(data);
      let saveData = JSON.stringify(init);
      let writeStream = await fs.createWriteStream(`./dB/${id}.txt`);
      await writeStream.write(saveData, "utf-8");
      return await writeStream.end();
    }
    let newData = await asyncFs.readFile(`./dB/${id}.txt`, {
      encoding: "utf-8",
    });

    let parsedData = JSON.parse(newData);
    if (parsedData.length < 1) {
      parsedData = [];
    }
    parsedData.push(data);

    let saveToData = JSON.stringify(parsedData);
    let writeStream = await fs.createWriteStream(`./dB/${id}.txt`);
    await writeStream.write(saveToData, "utf-8");
    await writeStream.end();
  } catch (error) {
    throw error;
  }
};

const getBinaryData = async (id) => {
  let fileToRead = await asyncFs.readFile(`./dB/${id}.txt`, {
    encoding: "utf-8",
  });
  let parsedData = JSON.parse(fileToRead);
  const extractedBuffArr = [];
  for (const dataNeeded of parsedData) {
    for (const DataString in dataNeeded.data) {
      extractedBuffArr.push(DataString);
    }
  }
  return extractedBuffArr;
};

module.exports = {
  saveToFile,
  getBinaryData,
};
