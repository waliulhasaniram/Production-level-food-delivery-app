import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI, {
            dbName: "Zomato_clone",
        });
        console.log("connected to mongodb database");
    }
    catch (error) {
        console.log(error);
    }
};
export default connectDB;
