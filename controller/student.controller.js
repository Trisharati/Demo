const studentModel = require("../model/student");
const mongoose = require("mongoose");


const add = async (req, res) => {
  console.log("hiii");
  let dataobj = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };

  const tt = new studentModel(dataobj)
    .save()
    .then((data) => {
      res.status(200).json({ message: "Student data created", data: data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const view = async (req, res) => {

    console.log("hello")
  studentModel
    .aggregate([
      {
        $project: {
          __v: 0,
          updateAt: 0,
        },
      },
    ])
    .then((data) => {
      res.status(200).json({
        data: data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

const update=async (req,res)=>{

    console.log("bye",req.params.id)

    studentModel.findOneAndUpdate({_id:new mongoose.Types.ObjectId(req.params.id)},{
       ...req.body
       
    }) .then((data) => {
        console.log("hhhhh")
        res.status(200).json({ message: "Student data updated" });
      })
      .catch((error) => {
        console.log(error);
      });
}

module.exports = { add, view,update };
