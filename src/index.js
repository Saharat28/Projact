const express = require('express');
const app = express();
//  get port number from environment settings
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/users.route');

// cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// path url
// app.[method]();

//  Match Get localhost:4000
app.get("/", (req,res) => {
    res.send(" ");
});

// ใช้ productRoute เมื่อ requst ขึ้นต้นด้วย /products
app.get("/users", userRoute);


app.listen(port, () => {
    console.log("Server start at port " + port);
});