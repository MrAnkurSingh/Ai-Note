const mongoose=require('mongoose');



const noteSchema= new mongoose.Schema({
    originalText:String,
    rewrittenText:String,
});

const Note=mongoose.model('Note',noteSchema);
module.exports=Note;