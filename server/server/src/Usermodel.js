const mongoose = require('mongoose');
const userData = [
    {
        "id":1,
        "stname": "Rishi",
        "fee": 343,
        "course": "B.Tech"
    },
    {
        "id":2,
        "stname": "Niraj",
        "fee": 123,
        "course": "B.Tech"
    },
    {
        "id":3,
        "stname": "jay",
        "fee": 234,
        "course": "B.Tech"
    }
];
// const authorSchema = new mongoose.Schema({

//     id:{
//         type: String,
//         required: true,
//     },
//     UserName:{
//         type: String,
//         required: true,
//     },
//     Course:{
//         type: String,
//         required: true,
//     },
//     Fee:{
//         type: Number,
//         required: true,
//     }
  

// },{timestamps:true})

//  module.exports = mongoose.model("MyStudent", authorSchema)

 module.exports = userData