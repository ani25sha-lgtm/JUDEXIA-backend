const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Database connection placeholder ✅');
  console.log('MongoDB connection is currently disabled');
  console.log('To enable: Uncomment the code below and provide valid MONGO_URI in .env');

  return;

  // UNCOMMENT BELOW TO ENABLE REAL DATABASE CONNECTION
  // try {
  //   await mongoose.connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  //   console.log('MongoDB connected successfully ✅');
  // } catch (error) {
  //   console.error('MongoDB connection error:', error.message);
  //   process.exit(1);
  // }
};

module.exports = connectDB;
