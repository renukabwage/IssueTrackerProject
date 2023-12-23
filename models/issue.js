const mongoose=require('mongoose');
// issue list schema
const issueSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    projectRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProjectList',
        required:true
    },
    labels:[
        {
        type:String,
        required:true
        }
    ],
},{
    timestamps:true
})

module.exports =mongoose.model('issueSchema',issueSchema);
//module.exports=IssueSchema;