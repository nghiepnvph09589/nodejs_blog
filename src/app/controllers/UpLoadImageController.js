let multer = require('multer');
let multerConfig = multer.diskStorage({
  destination: './src/public/images',
  filename: function (request, file, cb) {
    let math = ["image/jpeg"];
    if (math.indexOf(file.mimetype) === -1) {
      let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpg.`;
      return cb(errorMess, null);
    }
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }

});
let uploadSingleFiles = multer({
  storage: multerConfig, limits: {
    fileSize: 1 * 1024 * 1024,
    files: 1,
  }
}).single("image");
let uploadArrayFiles = multer({
  storage: multerConfig, limits: {
    fileSize: 1 * 1024 * 1024,
    files: 10,
  }
}).array("image");
class UploadImageController {

  array(req, res) {
    uploadArrayFiles(req, res, async function (err, images) {
      if (!err) {
        res.json({
          result: 'Thành công',
          data: req.files.map(image => ({
            url: image.path
          })
          ),
          message: 'Upload thành công'
        });
      } else {
        res.status(400).json()
      }
    })
  }
  single(req, res) {
    uploadSingleFiles(req, res, async function (err, images) {
      if (!err) {
        res.json({
          result: 'Thành công',
          data: {
            url: req.file.path
          },
          message: 'Upload thành công'
        });
      } else {
        res.status(400).json()
      }

    })
  }
}

module.exports = new UploadImageController