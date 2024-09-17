const express = require('express');
const indexRoute = require('./routes/indexRoute')
require("./db/dbConnect")

const app = express();
app.use(express.json())

const port = process.env.PORT || 3001;

app.use("/", indexRoute)

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})
