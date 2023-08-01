var db = require('../models');

const Areas = db.areas;

var areaInsert = async (req, res) => {
    Areas.create({
        "aname": req.body.aname,
        "cid": req.body.cid,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then((area) => {res.json(area);})
    .catch((err) => {console.log(err);});
};


var areaUpdate = async (req,res) =>{
    const id = req.body.id;

    await Areas.update(req.body,{
        where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var areaDelete = async(req, res) => {
    const id = req.params.id;
    await Areas.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var areaView = async (req,res) => {
    
    await Areas.findAll()
    .then((data) => {res.json(data.sort(function(a,b){return a.id-b.id}))})
    .catch((err)=> console.log(err));
}

module.exports={
    areaInsert,
    areaUpdate,
    areaDelete,
    areaView,
}