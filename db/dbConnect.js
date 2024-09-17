const mongoose = require('mongoose');

require('dotenv').config();

const main = () => {
    try{
        mongoose.connect(process.env.DB_CONNECTION)
        console.log("connected to database");
    }catch(e){
        console.log("error",e);
    }
}
main()