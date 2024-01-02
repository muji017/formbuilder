const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  textbox: {
    type: [String],
    default: [],
  },
  dropBox: {
    type: [
      {
        head: String,
        options: [String],
      },
    ],
    default: [],
  },
  checkBox: {
    type: [
      {
        head: String,
        options: [String],
      },
    ],
    default: [],
  },
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
