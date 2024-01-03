const formModel = require('../models/formModel')

const createForm = async (req, res) => {
    try {
        console.log("data from the frontend", req.body);
        const userId = req.userId
        const formData = req.body
        const newForm = new formModel({
            formName:formData?.formName,
            userId: userId,
            textbox: formData?.textbox,
            dropBox: formData?.dropBox,
            checkBox: formData?.checkBox,
        });

        await newForm.save();
        return res.status(200).json({message:"Form created"})
    } catch (error) {
        return res.status(500).json({error})
    }
}
const getForms = async (req, res) => {
    try {
        const userId=req.userId
        const forms=await formModel.find({userId:userId})
        return res.status(200).json({forms})
    } catch (error) {
       return res.status(500).json({error}) 
    }
}
const deleteForm= async(req,res)=>{
    try {
        const userId=req.userId
        const formId=req.query.id
        await formModel.deleteOne({_id:formId})
        getForms(req,res)
    } catch (error) {
        return res.status(500).json({error}) 
    }
}
module.exports = {
    createForm,
    getForms,
    deleteForm
}