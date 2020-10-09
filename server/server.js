const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors");
const userRoutes = require("./routes/userRoute")
const credentialRoutes = require("./routes/credentialRoute")
const app = express()

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/user", userRoutes)
app.use("/api", credentialRoutes)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next()
})


mongoose
  .connect("mongodb://127.0.0.1:27017/mulu", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Server has started.......")
    app.listen(5000)
  })
  .catch((err) => {
    console.log(err)
  })
