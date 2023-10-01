const {Schema, model} = require('mongoose')

const videoSchema = new Schema({
      name: {
        type: String,
        default: `Record-${Date.now()}`
      } ,
      url: {
        type: String,
        default: ""
      },
      mimeType:{
        type: String
      },
      transcription:{
        type: String
      },
      payload: {
        type: Array
      },
})
const Video = model('Video', videoSchema)

module.exports = Video