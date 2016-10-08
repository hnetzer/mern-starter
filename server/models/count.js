import mongoose from 'mongoose'
const Schema = mongoose.Schema

const countSchema = new Schema({
  value: { type: Number, required: true },
})

export default mongoose.model('Count', countSchema)
