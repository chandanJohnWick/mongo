const mongoose =require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/ttchanell")
.then(() => console.log('connect is sussesful'))
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
    name : "react js",
ctype: "node",
videos: 60,
author: "chandan",
active: true,
})
reactVarma.save();

async function getDemo(){
    const result=await VarmaDemo.find({videos :{$eq :80}});
    console.log(result);
}
getDemo();