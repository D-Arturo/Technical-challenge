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
    //con esta propiedad lo que hacemos es incluir por defecto los datos de cuándo fue creado y cuándo actualizado por última vez
  }
);

module.exports = model('Ad', AdSchema, 'ads');