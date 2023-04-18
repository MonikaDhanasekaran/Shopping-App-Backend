const express = require("express");
const auth = require("../../models/authModel");
const googlePixelMobile = require("../../models/Mobiles/googlePixelMobileModel");
const router = express.Router();

router.get("/get", (req,res)=>{
    try{
        googlePixelMobile.find((err,data)=>{
            if(err){
                return res.status(400).send({ msg: "Error while retrieving data" });
            }
            res.status(200).send(data);
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.get("/searchGooglePixel/:key", async(req,res)=>{
    let result = await googlePixelMobile.find({
        "$or": [
            {
                name: { $regex: req.params.key }
            },
            {
                strikeOutRate: { $regex: req.params.key }
            },
            {
                originalRate: { $regex: req.params.key }
            },
        ]
    });
    res.send(result);
});

router.get('/getOne/:dataID', (req, res) => {
    try{
        googlePixelMobile.findOne({_id: req.params.dataID}, (err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving an data. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});

router.post("/create", auth.authenticateUser, async (req, res) => {
    try {
        const payload = req.body;
        const newData = new googlePixelMobile(payload);
        await newData.save((err,data) => {
            if(err){
                return res.status(400).send({ msg: "Error while adding data" });
            }
            res.status(201).send({ dataId: data._id, msg: "Data has been added successfully" });
        });
    } catch (err) {
        res.status(500).send({ msg: "Internal Server Error" });
        console.log(err);
    }
  });

router.put("/update/:dataID", auth.authenticateUser, (req,res)=>{
    try{
        googlePixelMobile.findByIdAndUpdate({ _id: req.params.dataID }, { $set: req.body }, (err,data)=>{
            if(err){
                return res.status(400).send({ msg: "Error while updating data" });
            }
            res.status(201).send({ dataId: data._id, msg: "Data have been updated" });
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

router.delete("/delete/:dataID",auth.authenticateUser ,(req,res)=>{
    try{
        googlePixelMobile.deleteOne({ _id: req.params.dataID }, (err,data)=>{
            if(err){
                return res.status(400).send("Error while deleting data");
            }
            res.status(200).send({ msg: `Data with id ${req.params.dataID} has been deleted` });
        });
    }catch(error){
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

module.exports = router;