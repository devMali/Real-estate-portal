var db = require('../models');

const Cities = db.cities;

// var cityIns = async (req,res) => {
//     let data = Cities.create({id:2,cname:'Ahmedabad',createdAt:new Date(),updatedAt:new Date()})
// }

// var cityUp = async (req,res) => {
//     let data = await Cities.update({cname:'Amreli'},{where:{id:1}})
// }
// var cityDel = async (req,res) => {
//     let data = await Cities.destroy({where:{id:2}})
// }

// var cityGet = async (req,res) => {
//     let data = await Cities.findAll();
//     res.send(data);
// }

var cityInsert = async (req,res) => {
    await Cities.create({
            "cname" : req.body.cname,
            "createdAt" : new Date(),
            "updatedAt" : new Date()
    }).then((ct) => {res.json(ct);})
    .catch((err) => {res.status(401).send("same city found")});
}

var cityUpdate = async (req,res) =>{
    const id = req.body.id;

    await Cities.update(req.body,{
        where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var cityDelete = async(req, res) => {
    const id = req.params.id;
    await Cities.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var cityView = async (req,res) => {
    
    await Cities.findAll()
    .then((data) => {res.json(data.sort(function(a,b){return a.id-b.id}))})
    .catch((err)=> console.log(err));
}

module.exports={
    //cityIns,    
    // cityUp,
    // cityDel,
    //cityGet,
    cityInsert,
    cityUpdate,
    cityDelete,
    cityView
}