let express = require("express");
const userRouter = require("./routers/user");
let app = express();
app.use(express.json())
app.use(userRouter);
app.listen(5000, () => {
  console.log("server is running !");
});
