const formModel=require('../models/formModel')

const createForm=async(req,res)=>{
    console.log("data from the frontend",req.body);
    const userId=req.userId
    const formData=req.body
    const newForm = new formModel({
      userId:userId,
      textbox: formData?.textbox,
      dropBox: formData?.dropBox,
      checkBox: formData?.checkBox,
    });

    await newForm.save();
}
module.exports = {
    createForm
}