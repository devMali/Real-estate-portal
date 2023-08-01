var db = require('../models');
const { QueryTypes } = require('sequelize');
const Properties = db.properties;


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '../propimages')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   })

// var upload = multer({storage:storage}).single('img');
// var filepath;

var propInsert = async (req, res) => {

    // upload(req,res,(err) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(req);
    //     //filepath = req.file.path;
    // })
    Properties.create({
        "padd": req.body.padd,
        "price": req.body.price,
        "description": req.body.description,
        "size": req.body.size,
        "img": req.body.img,
        "is_sell": req.body.is_sell,
        "is_rent":req.body.is_rent,
        "aid": req.body.aid,
        "tid":req.body.tid,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then((prop) => {res.json(prop);})
    .catch((err) => {console.log(err);});
};


var propUpdate = async (req,res) =>{
    const id = req.body.id;

    await Properties.update(req.body,{
        where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var propDelete = async(req, res) => {
    const id = req.params.id;
    await Properties.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var propView = async (req,res) => {
    
    // await Properties.findAll()
    // .then((data) => {res.json(data.sort(function(a,b){return a.id-b.id}))})
    // .catch((err)=> console.log(err));
    const qry = 'select p.*,a.aname,t.tname from properties as p,areas as a,types as t where p.aid = a.id and p.tid = t.id order by p.id asc'
    const user = await db.sequelize.query(qry,{
        type:QueryTypes.SELECT,
    }).then((data) => {res.json(data)})
    .catch((err)=> console.log(err));
}

module.exports={
    propInsert,
    propUpdate,
    propDelete,
    propView
}