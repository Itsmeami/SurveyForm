const express = require("express");
const app = express();
const usermodel = require("./models/con");

app.set("view engine", "ejs");
app.use(express.static("public"));   
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render("index");
})

app.post('/create', async function(req, res) {
    const {name, email, age, option} = req.body;

    const user = await usermodel.findOne({email});
    if(user) {
        return res.status(400).send({message: "Email already exists"});
    }
    const Newuser = new usermodel({
        name : name,
        email : email,
        age : age,
        option : option
    });
    await Newuser.save();
    res.status(200).send("User Survey saved successfully");
})



app.listen(3000);