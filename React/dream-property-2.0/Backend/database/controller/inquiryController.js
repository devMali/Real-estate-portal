var db = require('../models');

const Inquiry = db.inquiries;

var inquiryInsert = async (req, res) => {
    Inquiry.create({
        "uid": req.body.uid,
        "pid": req.body.pid,
        "message":req.body.message,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then((inquiry) => {res.json(inquiry);})
    .catch((err) => {console.log(err);});
};


var inquiryUpdate = async (req,res) =>{
    const id = req.body.id;

    await Inquiry.update(req.body,{
        where:{id:id}})
        .then(() => res.status(200).json({msg:"updated successfully"}))
        .catch(err => console.log(err));
}

var inquiryDelete = async(req, res) => {
    const id = req.params.id;
    await Inquiry.destroy({
        where:{id:id}})
    .then(()=> res.status(200).json({msg:"deleted successfully"}))
    .catch((err)=> console.log(err));
}

var inquiryView = async (req,res) => {
    
    await Inquiry.findAll()
    .then((data) => {res.json(data.sort(function(a,b){return a.id-b.id}))})
    .catch((err)=> console.log(err));
}

module.exports={
    inquiryInsert,
    inquiryUpdate,
    inquiryDelete,
    inquiryView
}