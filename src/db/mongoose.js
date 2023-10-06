const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/task-manager',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
});

