var mongoose = require('mongoose');
let Schema = mongoose.Schema;


const taskSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: [true, 'Task title is required'],
      minlength: [5, 'Task title length must be greater than 5'],
      unique: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
  }, {
    timestamps: true
  });

mongoose.model('Controllers', taskSchema);
const Controllers=mongoose.model('Controllers');