var express = require('express');

const app = express();
var router = express.Router();

const Student = require('../models/student');

//To fetch the list of colleges
//http://localhost:3000/api/students

/*router.get('/', function(req, res){
    Student.find({}, function(err, student){
        res.json(student);
    })
});*/

router.get('/:student_name', function(req, res){
    Student.find({name : req.params.student_name}, function(err, student){
        //console.log(req.params.student_id);
        res.json(student);
    });
});

router.get('/', function(req, res){
    Student.find({}).populate("College").then(function(student){
        res.json(student);
    }).
    catch(function(err){
        console.log(err);
    });
});

router.post('/', function(req, res){
    var student_name = req.body.name;
    var student_email = req.body.email;
    var student_reg_no = req.body.reg_no;
    var student_college_id = req.body.college_id;
    
    const student = new Student({
        name : student_name,
        email : student_email,
        reg_no : student_reg_no,
        college_id : student_college_id
    });

    student.save().then(function(){
        res.json(student);
    })
});

router.delete('/:student_name', function(req, res){
    Student.findOneAndDelete({name : req.params.student_name}, function(err, student){
        res.json(student);
    });
})

module.exports = router;