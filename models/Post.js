const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({

// const PostSchema = mongoose.Schema({
    title :{
        type:String,
        required:true,
    },
    descirption:{
        type:String,
        required:true,
    },  
    date:{
        type:Date,
        default:Date.now(),
    },  
     
});
const Post = mongoose.model('Post',PostSchema);
module.exports =Post;
// module.exports = mongoose.model('Post',PostSchema);