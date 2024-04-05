// const { response } = require('express');
const userData = require('./Usermodel');

let regiserUser =  function (req, res, next){
    let data  = req.body;
    data.id = parseInt(data.id)
    if(Object.keys(data).length > 0){
        for(let i = 0 ; i< userData?.length ; i++){
            if(userData[i].id == data.id){
                userData[i] = data;
                return res.send({data:userData, msg:"data saved successfully"});
             }
        }
        userData.push(data);
    }
    let response = userData;
    return res.send(response);

}

let getUser =  function (req, res, next){
    let data = req.query;
    let response = {};
    // console.log('data: ', data, userData);
    if(Object.keys(data).length == 0){
        response = userData;
    }
    else{
        response  =  userData.filter((ele)=>{
            if(ele.studentname == data.studentname){
               console.log('ele.studentname == userData.studentname: ', ele.studentname == data.studentname);
               return ele;
            }
           });
           console.log('response: ', response);
    }
    response = response.sort((a, b) => {
        return a.id - b.id;
    });
    return res.send({data:response});
}

let updateUserData =  function (req, res, next){
    let id = parseInt(req.params.id);
    console.log('id: ', id);
    let data = req.body;
    console.log('data: ', data);
    data.id = id;
    for(let i = 0 ; i< userData?.length ; i++){
        if(userData[i].id == id){
            userData[i] = data;
            return res.send({data:userData, msg:"data deleted successfully"});
         }
    }
}

let deleteUser =  function (req, res, next){
    let id = req.params.id;
    let data = req.query;
    let response ={};
    if(id){
        for(let i = 0 ; i< userData?.length ; i++){
            if(userData[i].id == id ){
                userData.splice(i, 1);
                return res.send({data:userData, msg:"data deleted successfully"});
             }
          }
           console.log(response,"sssssssssss");
    } 
    else{ 
      for(let i = 0 ; i< userData?.length ; i++){
        if(userData[i].stname == data.stname  || userData[i].course == data.course || userData[i].fee == data.fee){
            userData.splice(i, 1);
            return res.send({data:userData, msg:"data deleted successfully"});
         }
      }

    }
};

module.exports= {regiserUser, getUser, updateUserData, deleteUser};