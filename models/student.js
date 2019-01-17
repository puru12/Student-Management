var mongoose = require('mongoose');
var schema = mongoose.Schema;

var studentSchema = new mongoose.Schema({
    name : {
        type: String
    },
    email : {
        type: String
    },
    reg_no : {
        type: String
    },college_id : {
        type:schema.Types.ObjectId,
        ref:"College"
    } 
});

const student = mongoose.model('Student', studentSchema);
module.exports = student;