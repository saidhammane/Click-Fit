
const express = require('express');
const multer = require('multer');
const session = require('express-session');
const flush = require('connect-flash')
const app = express();
const path = require('path')
const mysql = require("mysql");

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload_images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) =>
    {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .png, .jpg and .jpeg format allowed"))
        }
    }
});
const db = mysql.createConnection({host: "localhost", user: "root", password: "", database: "click-fit",});
db.connect((err) => {if (err) { throw err;}
    console.log("MySql Connected");
});

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/img'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/scss', express.static(__dirname + 'public/scss'))
app.use(session({
    secret: 'secret',
    cookie: {maxAge : 60000},
    resave: false,
    saveUninitialized: false
}));
app.use(flush());



app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {message : flush('message')})
});


app.post('/', upload.single('image'), (req, res) => {
    res.render('index');
});



app.get("/add", (req, res) => {
    var email = req.query.email;
    var password = req.query.password;
    let sql = "CALL addUser('"+email+"','"+password+"')";
    let query = db.query(sql,(err) => {if (err) {throw err;}
      res.render('index');
    });
});
  

app.listen(port, () => console.info(`Listening on port ${port}`))