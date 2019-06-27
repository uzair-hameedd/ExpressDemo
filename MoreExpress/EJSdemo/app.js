var express = require("express");
var app = express();
var port = 3000;


app.get("/", function (req, res) {

    res.render("home.ejs")
})


app.get("/fallinlovewith/:thing", function(req, res){
    
    var thing = req.params.thing;
    res.render("love.ejs" , {thingVar: thing });
});

app.get("/posts", function(req, res){
        
    var posts = [  
        { title: "Post 1" , author: "Alpha" },
        { title: "My adorable pet bunny" , author: "Bravo" },
        { title: "Caan you beleive this pomsky?" , author: "Charlie" }
        
    ];
    
    res.render("posts.ejs" , {posts: posts});
});

app.listen(port, function () {
    console.log("Server has started!!!");
})
