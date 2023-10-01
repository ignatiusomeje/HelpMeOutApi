const express = require("express");

const { saveVideo, getVideo, getAllVideo, playVideo } = require("../controllers");
const uploadErrors = require("../middleware/upload");

const router = express.Router();
// uploadErrors
router.post("/videos/create", saveVideo);

// router.get("/videos/", getAllVideo);
router.get("/videos/:id", getVideo);
router.get("/videos/play/:id", playVideo);

module.exports = router;
