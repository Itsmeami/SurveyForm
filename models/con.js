const mongoose = require("mongoose");

mongoose.connect(`localhost:3000`).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Something si wrong while connecting to db", err);
})

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim : true,
        minlength : 2,
        maxlength : 50
    },
    email: {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        match : [/^\S+\.\S+$/, "plese enter valid email"]

    },
    age : {
        type : Number,
        required : true,
        trim : true,
        min : 1,
        max : 100
    },
    option : {
        type : String,
        enum : ["1", "2", "3"],
        required : true
    }

})

module.exports = mongoose.model("user", userSchema);
