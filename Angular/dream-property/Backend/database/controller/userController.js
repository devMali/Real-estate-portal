const { QueryTypes } = require('sequelize');
var db = require('../models');
const bcrypt = require('bcryptjs');

const Users = db.users;

var userInsert = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt);
    
    const user= await Users.findOne({ where: {email:req.body.email}})
    if(!user){
        Users.create({
            "fname": req.body.fname,
            "lname": req.body.lname,
            "email": req.body.email,
            "password": hashedPass,
            "mobile": req.body.mobile,
            "address": req.body.address,
            "uimg":req.body.uimg,   
            "role": 'user',
            createdAt: new Date(),
            updatedAt: new Date()
        }).then((user) => {res.json(user);})
        .catch((err) => {console.log(err);});
        
    }else{
        return res.status(401).send({err:"Email Already exists"});
    }
   
};


var userUpdate = async (req,res) =>{
    const id = req.body.id;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt);

    await Users.update({
        "fname": req.body.fname,
        "lname": req.body.lname,
        //"email": req.body.email,
        // "password": hashedPass,
        "mobile": req.body.mobile,
        "address": req.body.address,
        },{where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var userDelete = async(req, res) => {
    const id = req.params.id;
    await Users.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var userView = async (req,res) => {
    const qry = "select * from users order by id asc"
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}



module.exports={
    userInsert,
    userUpdate,
    userDelete,
    userView,
}