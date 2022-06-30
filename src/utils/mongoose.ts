import mongoose from 'mongoose';

// const db_url = 'mongodb://localhost:27017/gocode_db' // For local environment
const db_url = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@gocode.0dj0lgr.mongodb.net/gocode_db?retryWrites=true&w=majority`;
const connectMongo = async () => mongoose.connect(db_url);

export default connectMongo;
