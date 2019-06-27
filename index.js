var express = require('express');
var app = express();
var port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'))

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/",function(req,res){
    res.send("Hi there,Welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){


    var sounds = { pig:'Oink', 
                   cow:'Moo', 
                   dog:'Woof Woof!',
                   cat:'I hate human'
                 };
    
    var animal =  req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" +sound + " '"); 
    
    
});


app.get("/repeat/:message/:times",function(req,res){
    
    var message = req.params.message;
    var times = Number(req.params.times);
         
    var result = "";
    
    for(var i = 0 ; i < times; i++){
        
        result += message + " ";       
    }
    
    res.send(result);

});

//  "bye" => "Goodbye!"
app.get("/bye", (req, res) => {
 res.send("Goodbye!!");
});

//  "Cat" => "MEOW"
app.get("/cat",function(req,res){
   res.send("MEOW!!!"); 
});

app.get("/r/:subredditName",function(req,res){
   
   var subreddit = req.params.subredditName;
    
   res.send("WELCOME TO THE " + subreddit.toUpperCase() +  " SUBREDDIT!"); 
}); 


app.get("/r/:subredditName/comments/:id/:title",function(req,res){
  res.send("WELCOME TO THE COMMENTS PAGE!");
})

app.get("*",function(req,res){
   res.send("Sorry, page not found...What are you doing with your life?"); 
});


app.listen(port,function(){
    console.log("Server has started!!!");
})
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))