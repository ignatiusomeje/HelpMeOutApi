const { json } = require("body-parser");

const {readFile,writeFile} = require("fs").promises;

const readFileFunc = async () => {
  try {
    const info = await readFile('./db/videos.json', 'utf8')
    // if (info.errno){
    //   return info
    // }
    const parsedVideo = JSON.parse(info);
    return parsedVideo
    
  //  return await fs.readFile("./db/videos.json", "utf8", async (err, data) => {
  //     if (err) {
  //       console.log(err, 'error 1')
  //       cb(err)
  //       return err
  //     }
  //     const parsedVideo = JSON.parse(data);
  //     if (parsedVideo.length < 1) {
  //       cb(null, [])
  //       return [];
  //     }
  //     cb(null, parsedVideo)
  //     return parsedVideo;
  //   });
  } catch (error) {
    // console.log(error, 'error 2')
    return error
  }
};

const writeFileFunc = async (data) => {
  const dataNeeded = JSON.stringify(data)
  await writeFile("./db/videos.json", dataNeeded, "utf8");
};

const sortFile = async (id) => {
  try {
    await fs.readFile("./db/videos.json", "utf8", (err, data) => {
      if (err) {
        throw new Error(err);
      }
      const parsedVideo = JSON.parse(data);
      const foundVideo = parsedVideo.filter((video) => video.id === id);
      if (foundVideo.length < 1) {
        return "not found";
      }
      return foundVideo;
    });
  } catch (error) {
    return err?.message;
  }
};

module.exports = { readFileFunc, writeFileFunc };
