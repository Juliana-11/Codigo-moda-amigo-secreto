// Config multer
/*const storage = multer.diskStorage({
    destination: function (req, file, cb){
        let folder = path.resolve(__dirname, '../public/img')
        Cb(null, folder );
    },
    Filename: function (req, file, cb){
        let imgName = Date.now() + path.extname(file.originalname)
        Cb(null, imgName);
    }
})
const upload = multer({storage: multerDiskStorage});

module.exports(upload)*/