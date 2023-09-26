const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect('mongodb://localhost:27017/task-manager-api');

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },  
    age: {
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("Age must be a positive number");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password length must be 6 and it doesn't contains password");
            }
        }
    }
});

const me = new User({
    name: "mike",
    email: "MIke@gmail.com  ",
    age: 27,
    password: "kalkias"
});

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log("Error**", error);
})

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: "Learn the Mongoose library",
    completed: false
})

task.save().then(()=>{
    console.log(task);
}).catch((error)=>{
    console.log("Error**", error);
})