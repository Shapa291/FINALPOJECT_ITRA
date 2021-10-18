const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Problem");
app.use("/problems", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const rateRouter = require("./routes/Rate");
app.use("/rate", rateRouter);

const rateUsersInfo = require("./routes/UsersInfo");
app.use("/usersinfo", rateUsersInfo);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
  const path=require('path');
  app.get('*',(req,res)=>{
  res.sendfile(path.resolve(__dirname,'client','build','index.html'));
})
}

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("Server running on port 3001");
  });
}).catch((err) => {
  console.log(err);
})
