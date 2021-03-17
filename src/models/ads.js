const { Schema, model } = require("mongoose");

const AdSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

AdSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

module.exports = model('Ad', AdSchema, 'ads');