const mongoose = require("mongoose")

const Schema = mongoose.Schema

const agentsSchema = new Schema({
  userId: { type: String},
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  gender: { type: String},
  zipCode: { type: String},
  profession: { type: String},
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
}
)

module.exports = mongoose.model('Agents', agentsSchema)
