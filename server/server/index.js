const express = require("express");
const app = express();
const cors = require("cors");
const userController = require('./src/userController'); 
const Usermodel= require('./src/Usermodel');
const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://rohinimirashe100:Rohini@12345@rohini123.xppo4iz.mongodb.net/Form?retryWrites=true&w=majority',function(){
//     console.log("Db is connected");
// });
mongoose.connect("mongodb+srv://mirasherohiniit:1Appz7yX1ejsAMyx@cluster0.kqovbrv.mongodb.net/Form", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(express.json());
app.use(cors());
app.post('/registreUser',userController.regiserUser);
app.get('/getUser',userController.getUser);
app.put('/updateUserDetais/:id', userController.updateUserData);
app.delete('/removeUser/:id',userController.deleteUser);

app.listen(8000, function(){ 
    console.log("server is listening on port :", 8000 );
})
