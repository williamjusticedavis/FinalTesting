const express = require('express');
const indexRoute = require('./routes/indexRoute')
const app = express();

const port = process.env.PORT || 3001;

app.use("/", indexRoute)

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})
