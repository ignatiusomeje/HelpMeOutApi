const {saveOneVideo,createID, fetchOneVideo,playOneVideo} = require("./videos");

module.exports = {
  getVideo: fetchOneVideo,
  // getAllVideo: fetchAllVideo,
  playVideo: playOneVideo,
  saveVideo: saveOneVideo,
  sendID: createID
}