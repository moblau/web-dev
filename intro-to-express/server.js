const express = require('express');
const app = express();
app.get("/", function(request,response){
    response.send("Hello");
});

app.get("/contact", function(request,response){
    response.send("Contact me");
});

app.get("/about", function(request,response){
    response.send("Hey, Im Morris");
});

app.get("/hobbies", function(request,response){
    response.send("i like music");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});