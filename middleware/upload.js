const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, "videos/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.includes("video")) {
      return cb(null, true);
    }
    cb(null, false);
    return cb(new Error("File not accepted"));
  }
}).single("record");

const uploadErrors = async (req, res, next) => {
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.status(400).json({
        status: 400,
        message: err?.message,
      });
    } else if (err) {
      res.status(400).json({
        status: 400,
        message: err?.message,
      });
    }
    next();
  });
};
module.exports = uploadErrors;
