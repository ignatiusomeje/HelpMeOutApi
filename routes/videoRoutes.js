const express = require("express");

const { sendID, getVideo, saveVideo, getAllVideo, playVideo } = require("../controllers");
const uploadErrors = require("../middleware/upload");

const router = express.Router();
// uploadErrors
router.post("/videos/create", sendID);

router.post("/videos/save/:id", saveVideo);
router.get("/videos/:id", getVideo);
router.get("/videos/play/:id", playVideo);

module.exports = router;
