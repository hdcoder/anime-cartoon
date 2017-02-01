import mongoose, { Schema } from 'mongoose'

const showsSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  img: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
})

showsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id: this.id,
      name: this.name,
      img: this.img,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Shows', showsSchema)

export const schema = model.schema
export default model
