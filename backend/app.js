const fs = require("fs");
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product-routes");
const meetingRoutes = require("./routes/meeting-routes");
const sample = require("./batch/test");
const speechToText = require("./middleware/speech-to-text");
const HttpError = require("./models/http-error");
const { diffIndexes } = require("./models/product");

const app = express();




app.use(express.json());

//app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/products", productRoutes);

app.use("/api/meetings", meetingRoutes);


app.use("/api/speech-to-text", (req, res, next) => speechToText(req,res,next));


app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const httpServer = app.listen(5000);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


io.on("connection", socket => { 
  
  console.log("connec" + socket.id);
  
  socket.on('rotation', rotationUpdate);

  function rotationUpdate(data){
    socket.broadcast.emit('rotationUpdate', data);
  }

  socket.on('draw', drawUpdate);

  function drawUpdate(data){
    socket.broadcast.emit('drawUpdate', data);
  }

  socket.on('filter', (index, callback) => {

    updateFilter(index);
    callback({
      response: "ok"
    })
  });

  function updateFilter(index){
    socket.emit('updateFilter', index);
  }



});


mongoose
  .connect(
    "mongodb+srv://vas:vamvakas@cluster0.uregh.mongodb.net/products?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    
    
    //setInterval(sample, 1500);
  })
  .catch((err) => console.log(err));
