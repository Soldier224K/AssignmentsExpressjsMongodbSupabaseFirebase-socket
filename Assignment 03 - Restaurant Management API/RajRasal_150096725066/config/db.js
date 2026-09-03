const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn('Warning: MONGO_URI is not defined in .env');
        }

        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://stocklineowner_db_user:stockline%40mongodv@cluster0.dg7czb1.mongodb.net/restaurantDB?appName=Cluster0');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
