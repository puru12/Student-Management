

function addCollege() {
    var college = { name : document.getElementById("college").value };    
    fetch("http://localhost:3000/api/colleges", {method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        }, body: JSON.stringify(college)}).then(function(response){
            if(response.status == 200){
                window.location = "collegelist.html";
            }
        });
}

function fun() {
    // console.log("table loaded");
    fetch("http://localhost:3000/api/students", {method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(data){
        var bodyRows = "";
        
        for(var i = 0;i < data.length;i++){
            bodyRows += "<tr>";
            bodyRows += "<td>" + "<a href='details.html?id=>"+data[i]._id+"'>"+
            data[i].name + "</a></td>";
            bodyRows += "<td>" + data[i].email + "</td>";
            bodyRows += "<td>" + data[i].reg_no + "</td>";
            bodyRows += "<td>" + data[i].college_id + "</td>";
            bodyRows += "</tr>";
        }
        //console.log(bodyRows);
        document.getElementById("table").innerHTML = bodyRows;
        return data;
    }).then(function(data){
        for(var i = 0;i < data.length;i++){
            fetch("http://localhost:3000/api/colleges/" + data[i].college_id, {method: 'GET'}).then(function(response){return response.json()}).then(function(response){
                console.log(document.getElementById("table").rows[i]);
                console.log(response.name);
            })
        }
    })
}

function discolleges(){
    var form = document.getElementById('form');
    var drop = form.college;
    fetch("http://localhost:3000/api/colleges", {method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(data){
        var options="";
        for(var i = 0;i < data.length;i++){
            options += "<option value = "+data[i]._id+">"+
                data[i].name+"</option>";
        }
        drop.innerHTML=options;
    });
}

function userform() {
    // console.log("hello");
    var form = document.getElementById("form");
    var name = form.name.value;
    var email = form.email.value;
    var reg_no = form.reg_no.value;
    var college_id = form.college.value;

    var student = {name : name, email : email, reg_no : reg_no, college_id : college_id};

    fetch("http://localhost:3000/api/students", {method : 'POST',
        headers:{
            "Content-Type" : "application/json"
        }, body : JSON.stringify(student)}).then(function(response){
            if(response.status == 200)
                window.location = "index.html";
        });
}

function displayColleges() {
    fetch("http://localhost:3000/api/colleges", {method: 'GET'}).then(function(response){
        return response.json();
    }).then(function(data){
        var bodyRows = "";
        console.log(data);

        for(var i = 0;i < data.length;i++){
            bodyRows += "<tr>";
            bodyRows += "<td>" + data[i].name + "</td>";
            bodyRows += "</tr>";
        }
        console.log(bodyRows);

        document.getElementById('collegeList').innerHTML = bodyRows;
    });
}

function studentDetail() {
    var url = new URL(window.location.href);
    console.log(url);
    var id = url.searchParams.get("id");
    console.log(id);

    // fetch("http://localhost:3000/api/students/" + id, { method: "GET" })
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //     var display =
    //       "<p>Name :" +
    //       data.name +
    //       "</p>" +
    //       "<p>Reg No :" +
    //       data.reg_no +
    //       "</p>" +
    //       "<p>Email :" +
    //       data.email +
    //       "</p>" +
    //       "<p>College :" +
    //       data.college_id +
    //       "</p>" +
    //       "<button class='btn btn-primary' onclick='deleteStudent(\"" +
    //       data._id +
    //       "\")'>Delete</button>";

    //     document.getElementById("details").innerHTML = display;
    //   });
}

function deleteStudent(id) {

}