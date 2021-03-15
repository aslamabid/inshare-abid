require('dotenv').config();
//console.log(process.env.MONGO_CONNECTION_URL);
const mongoose = require("mongoose");
// DB_USER=inShare
// DB_PASS=FZUVC9RA31Mv1JlL
function connectDB(){
	mongoose.connect("mongodb+srv://inShare:gRWSTv8dVOnr1jta@cluster0.wmczb.mongodb.net/inshare?retryWrites=true&w=majority", {
		useNewUrlParser:true,
		useUnifiedTopology:true,
		useCreateIndex:true
	}).then(() => {
		console.log(`Connection Successfull`);
	}).catch((e) => {
		console.log(e);
		console.log('No Connection');
	})
}

module.exports = connectDB;