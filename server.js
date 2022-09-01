const express = require('express')
const dotenv = require('dotenv')
require('dotenv').config();
var cors = require('cors');


console.log("vvvshghs",process.env.MONGODB_URL)
const app = express()
const port = 4000
app.use('/public',express.static('public'))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
var corsOptions = {
  origin:'*',
  methods: 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  allowedHeaders: [ 'Content-Type', 'Authorization' ]
};
app.use(cors(corsOptions));
const mongoose = require("mongoose");
// const routes = require("./route")

app.use(express.json());
// app.use("/api",routes);

mongoose.connect(
    process.env.MONGODB_URL,
    {
      dbName: "portfolio",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to yourDB-name database")
  );


app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('./app/routes/user.routes.js')(app);
require('./app/routes/card.routes.js')(app);
require('./app/routes/student.routes.js')(app);
require('./app/routes/AboutMe.routes.js')(app);
require('./app/routes/skills.routes.js')(app);
require('./app/routes/service.routes.js')(app);
require('./app/routes/project.routes.js')(app);
require('./app/routes/blogs.routes.js')(app);
require('./app/routes/contactInfo.routes.js')(app);
require('./app/routes/sendMessage.routes.js')(app);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})