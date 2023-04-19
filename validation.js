const mongoose =require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/ttchanell")
.then(() => console.log('connect to mongo db'))
.catch((err)=> console.log(err));

const playlistSchema = new mongoose.Schema({
name : {type: String, required :true,minLength:5 },
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
    name : "hell",
ctype: "node",
videos: 70,
author: "chandan",
active: true,
})
reactVarma.save();

async function getDemo(){
    const result=await VarmaDemo.find({videos :{$eq :80}});
    console.log(result);
}
getDemo();