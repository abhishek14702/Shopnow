const express = require("express");
const authRouter = require("./routes/authRoute");
const app = express();
const port = process.env.port || 4000;
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

dbConnect();
app.use(express.json());
app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
