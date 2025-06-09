const mongoose = require('mongoose');

const username = 'ramramramsh8357484';
const password = 'uRjosxQ1aFDJEKNE'; // URL-encoded password here
const dbName = 'gofood'; // Replace with your actual DB name

const uri = "mongodb+srv://ramramramsh8357484:<uRjosxQ1aFDJEKNEuRjosxQ1aFDJEKNE>@cluster0.xjfssqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = function (callback) {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, async (err) => {
        if (err) {
            console.error("---MongoDB connection error:", err);
        } else {
            console.log("✅ Connected to MongoDB");
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async (err, data) => {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray((err, Catdata) => {
                    callback(err, data, Catdata);
                });
            });
        }
    });
};
