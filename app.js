const express = require("express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 7007;
// local mongodb database
const localDatabase = "mongodb://localhost/arena";

const playstationRouter = require("./routes/playstations");
const foodRouter = require("./routes/foods");
const adminRouter = require('./routes/admins')

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  credentials: true,
  origin: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use("/playstations", playstationRouter);
app.use("/foods", foodRouter);
app.use('/admin', adminRouter)

mongoose
  .connect(localDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("LocalDatabase is connected");
  })
  .catch((error) => console.log(error));

server.listen(port, () => console.log("Server is runing on", port));