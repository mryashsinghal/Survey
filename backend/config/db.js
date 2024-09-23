const mongoose = require('mongoose');

 const dbConnection = async ()=> {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB Connected');
    }
    catch (err) {
        console.log(`Error in Connection with ${err.message}`);
        process.exit(1);
    }
}

module.exports = dbConnection;
