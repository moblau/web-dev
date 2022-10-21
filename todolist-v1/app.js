const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname  + "/date.js");

const app = express();

app.set('view engine', 'ejs'); 

const items = ["hello"];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res) => {

    const day = date.getDate();

    res.render("list", {  listTitle: day, items : items });
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", items: workItems })
})

app.get("/about" ,(req,res) => {
    res.render("about");
})
app.post("/", (req, res) =>{
    const item = req.body.thing;
    console.log(req.body.list);
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else{
        items.push(item);
        res.redirect("/");
    }

})

// app.post("/work", (req,res) => {
//     var item = req.body.thing;
    
    
// })
app.use(express.static("./public"));
app.listen(3000,() => {
    console.log('App listening on port 3000');
});
