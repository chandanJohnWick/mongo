const mongoose =require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/ttchanell")
.then(() => console.log('connect to mongo db'))
.catch((err)=> console.log(err));

const playlistSchema = new mongoose.Schema({
name : String ,
ctype: String,
videos: Number,
author: String,
active: Boolean,
date: {
type:Date,
default: Date.now
}
})

const VarmaDemo =new mongoose.model("VarmaDemo",playlistSchema);
//creating the documents

const reactVarma = new VarmaDemo({
    name : "node js",
ctype: "high",
videos: 50,
author: "chandan",
active: true,
})
reactVarma.save();
