const path = require("path");
// const folderName = './dB/';

const folderName = path.join(__dirname, "dB");
const { read, existsSync } = require("node:fs");
const fs = require("fs").promises;

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
    // let currentData = await fs.readdir("./dB");
    const folderExists = existsSync("./dB");
    if (!folderExists) {
      fs.mkdirSync("./dB");
    }
    const exists = existsSync(`./dB/${id}.json`);
    if (!exists) {
      let saveData = JSON.stringify([data]);
      return await fs.writeFile(`./dB/${id}.json`, saveData, "utf-8");
    }
    let newData = await fs.readFile(`./dB/${id}.json`, {
      encoding: "utf-8",
    });
    let parsedData = JSON.parse(newData);
    if (parsedData.length < 1) {
      parsedData = [];
    }
    parsedData.push(data);

    let saveToData = JSON.stringify(parsedData);

    return await fs.writeFile(`./dB/${id}.json`, saveToData, "utf-8");
  } catch (error) {
    throw error;
  }
};

const getBinaryData = async (id) => {
  let fileToRead = await fs.readFile(`./dB/${id}.json`, { encoding: "utf-8" });

  const parsedData = JSON.parse(fileToRead);
  const extractedBuffArr = [];
  parsedData.forEach((data) => {
    for (const DataString of data.data) {
      extractedBuffArr.push(DataString);
    }
  });
  return extractedBuffArr;
};

module.exports = {
  saveToFile,
  getBinaryData,
};
