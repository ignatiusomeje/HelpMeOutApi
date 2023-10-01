const {videoUpload, fetchOneVideo,playOneVideo} = require("./videos");

module.exports = {
  saveVideo: videoUpload,
  getVideo: fetchOneVideo,
  // getAllVideo: fetchAllVideo,
  playVideo: playOneVideo
}