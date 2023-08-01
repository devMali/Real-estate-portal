var db = require('../models');

const Types = db.types;

var typeInsert = async (req, res) => {
    Types.create({
        "tname": req.body.tname,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then((type) => {res.json(type);})
    .catch((err) => {console.log(err);});
};


var typeUpdate = async (req,res) =>{
    const id = req.body.id;

    await Types.update(req.body,{
        where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var typeDelete = async(req, res) => {
    const id = req.params.id;
    await Types.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var typeView = async (req,res) => {
    
    await Types.findAll()
    .then((data) => {res.json(data.sort(function(a,b){return a.id-b.id}))})
    .catch((err)=> console.log(err));
}

module.exports={
    typeInsert,
    typeUpdate,
    typeDelete,
    typeView
}