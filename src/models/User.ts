import mongoose, { Model, Schema, Document, HookNextFunction } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export interface User extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  count: number
  address: string
  createdAt: Date
  generateAuthToken: () => Promise<string>
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
    password: {
      type: String,
      minlength: 3,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
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

userSchema.pre<User>("save", async function (next: HookNextFunction) {
  const salt = await bcrypt.genSalt(8)

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

userSchema.methods.generateAuthToken = async function (): Promise<string> {
  const user = this
  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "24h" })
  await user.save()
  return token
}

const User = mongoose.model<User, IUser>("User", userSchema)
export default User
