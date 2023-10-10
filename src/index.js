const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const corsMiddleware = require("./middleware/cors");

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(corsMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})