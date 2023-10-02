const path = require("path");
// const folderName = './dB/';

const folderName = path.join(__dirname, "dB");
const { read, existsSync } = require("node:fs");
const fs = require("fs");
const asyncFs = require("fs").promises;

// const readDataFromFile = async (id) => {
//   try {
//     const folderExists = fs.existsSync("./dB");
//     if (!folderExists) {
//       fs.mkdirSync("./dB");
//     }
//     const exists = fs.existsSync(`./dB/${id}.json`);
//     if (!exists) {
//     }
//     return await fs.readFile(`./dB/${id}.json`, {
//       encoding: "utf-8",
//     });
//   } catch (err) {
//     return err;
//   }
// };
// const writeDataToFile = async (id, data) => {
//   try {
//     return await fs.writeFile(`./dB/${id}.json`, data, {
//       encoding: "utf-8",
//     });
//   } catch (err) {
//     return err;
//   }
// };

// const checkFileExistence = async () => {
//   try {
//     if (!fs.existsSync("./DB")) {
//       fs.mkdirSync("./DB");
//     }
//     // console.log('hello')
//     // // let currentData = await
//     // fs.readdir("./dB", (err, files)=> {
//     //   if (err && err.code === 'ENOENT'){
//     //     fs.mkdir('./')
//     //     return console.log(err)
//     //   }
//     //   return console.log(files)
//     // });
//     //   return console.log(currentData)

//     const file = currentData.filter((item) => item === `${id}.json`);

//     if (file.length > 0) {
//       let currentData = await fs.readFile(`./dB/${id}.json`, {
//         encoding: "utf-8",
//       });
//     }
//   } catch (error) {
//     return error;
//   }
// };
// checkFileExistence();
// return

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
    let newData = await asyncFs.readFile(`./dB/${id}.txt`, "utf-8");

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
  // console.log(id, "inside get binary");

  let fileToRead = await asyncFs.readFile(`./dB/${id}.txt`, "utf-8");
  // await fs.createReadStream(`./dB/${id}.json`, {
  //   encoding: "utf-8",
  // });
  // readFile()
  // console.log(fileToRead, "fileto read");

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
