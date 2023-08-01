const { QueryTypes } = require('sequelize');
var db = require('../models');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Cities = db.cities;
const Areas = db.areas;
const Types = db.types;
const Properties = db.properties;
const Users = db.users;
const Inquiry = db.inquiries;

const secret = "secret123"

var userPK = async (req,res)=>{
    const id = req.params.id;
    await Users.findByPk(id )
   .then((data) => {res.json(data)})
   .catch((err)=> console.log(err));
}

var propPK = async(req,res) =>
    {
        const id = req.params.id;
        const qry = 'select p.*,a.aname,t.tname from properties as p,areas as a,types as t where p.aid = a.id and p.tid = t.id and p.id =?'
        const user = await db.sequelize.query(qry,{
            type:QueryTypes.SELECT,
            replacements:[id]
        }).then((data) => {res.json(data)})
        .catch((err)=> console.log(err));
    }

var userLogIn = async (req, res) => {
    
    const user= await Users.findOne({ where: {email:req.body.email}})
    if(!user){
        return res.status(404).send({err:"User not found"});
    }

    if(!await bcrypt.compare(req.body.password,user.password))
    {
        return res.status(400).send({err:"Invalid Credentials"}); 
    }
   const udata={
        id: user.id,
        email :user.email,
        // fname:user.fname,
        // lname:user.lname,
        // mobile:user.mobile
   }
    const token = jwt.sign(udata,secret,{ expiresIn: '1h' })
    res.cookie('jwt', token,{
        httpOnly : true,
        maxAge : 24 * 60 * 60 * 1000 // oneday
    })

    res.status(200).send({message:"Login successful",id:user.id})

}

var userVerify = async (req, res) => {
    try{
        const cookie = req.cookies['jwt'];
        
        const claims = jwt.verify(cookie, secret)

        if(!claims){
            res.status(401).send({message:"unauthenticated"})
        }
        else{
        const user = await Users.findOne({where:{id : claims.id}})

        const {password , ...data} = await user.toJSON()
        res.status(200).send(data)
        }
    }
    catch (err) {
        res.send("unauthenticated")
    }
}

var userLogOut = async (req,res) => {
    res.cookie("jwt",'',{maxAge:0})
    res.send({message:"Successfully logged out"})
}

var propbyArea = async (req, res) => {
    const aname = req.params.aname;

    const qry = "select p.*,a.aname from properties as p , areas as a where p.aid = a.id and a.aname=?"
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
       replacements : [aname]
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}


var propbyType = async (req, res) => {
    const tname = req.params.tname;

    const qry = "select p.*,t.tname from properties as p,types as t where p.tid = t.id and t.name=?"
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
       replacements : [tname]
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}

var propForSell = async (req, res) => {

    const qry = 'select p.*,a.aname,t.tname from properties as p,areas as a,types as t where p.is_sell = true and p.aid = a.id and p.tid = t.id'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}


var propForRent = async (req, res) => {

    const qry = 'select p.*,a.aname,t.tname from properties as p,areas as a,types as t where p.is_rent = true and p.aid = a.id and p.tid = t.id'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}

var inqByProp = async (req, res) => {

    pid = req.params.pid;
    const qry = 'select u.fname,u.lname,i.pid,i.message from users u,inquiries i where i.pid = ? and i.uid = u.id'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
        replacements : [pid]

    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}

var inqByUser = async (req, res) => {

    uid = req.params.uid;
    const qry = 'select p.padd,p.price,p.description,p.img,p.size,t.tname,a.aname,i.message from users u,inquiries i,areas a,types t,properties p where i.pid = p.id and i.uid = ? and i.uid = u.id and p.aid=a.id and p.tid=t.id'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
        replacements : [uid]
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}


var inquiry = async (req, res) => {

    const qry = 'select i.id as inqid,u.id as uid,u.fname,u.lname,u.email,u.mobile,p.id as pid,p.padd,p.price,p.size,i.message from users u,inquiries i,properties p where i.uid = u.id and i.pid = p.id'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
       
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));

}

var inqCount = async (req,res) => {
    var qry = 'select count(*) from inquiries';
    await db.sequelize.query(qry, {
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}


var userCount = async (req,res) => {
    var qry = 'select count(*) from users';
    await db.sequelize.query(qry, {
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}

var propCount = async (req,res) => {
    var qry = 'select count(*) from properties';
    await db.sequelize.query(qry, {
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}


var cityCount = async (req,res) => {
    var qry = 'select count(*) from cities';
    await db.sequelize.query(qry, {
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}


var areaCount = async (req,res) => {
    var qry = 'select count(*) from areas';
    await db.sequelize.query(qry, {
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}

var searchProperty = async (req,res) => {
    var val = req.params.search
    val ='%'+val+'%'
    val = val.toUpperCase()
    var qry = 'select p.*,a.aname,t.tname from properties as p,areas as a,types as t where p.aid = a.id and p.tid = t.id and upper(t.tname) like :prop';
    await db.sequelize.query(qry, {
        replacements:{prop : val},
        type:QueryTypes.SELECT,
    }).then((data) => {res.send(data)})
}

module.exports={
    userPK,
    propPK,
    userLogIn,
    propbyArea,
    propbyType,
    propForSell,
    propForRent,
    inqByProp,
    inqByUser,
    userVerify,
    userLogOut,
    inquiry,
    inqCount,
    userCount,
    propCount,
    cityCount,
    areaCount,
    searchProperty
}
