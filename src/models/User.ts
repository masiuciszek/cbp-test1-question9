import mongoose, { Model, Schema, Document } from "mongoose"

export interface User extends Document {
  firstName: string
  lastName: string
  email: string
  address: string
  createdAt: Date
}

interface IUser extends Model<User> {
  foo: () => string
}

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const User = mongoose.model<User, IUser>("User", userSchema)
export default User
