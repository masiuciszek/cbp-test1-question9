import * as dotenv from "dotenv"
import mongoose, { Model, Schema, Document, HookNextFunction } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
dotenv.config()

export interface User extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  count: number
  address: string
  createdAt: Date
  generateAuthToken: (expiresIn?: string) => Promise<string>
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

userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id", // which field on the User
  foreignField: "author", // which field on the Post
})

userSchema.pre("find", function (next: HookNextFunction) {
  this.populate("reviews")
  next()
})

userSchema.pre("findOne", function (next: HookNextFunction) {
  this.populate("reviews")
  next()
})

userSchema.methods.generateAuthToken = async function (
  expiresIn: string = "20min",
): Promise<string> {
  const user = this
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn,
  })
  await user.save()
  return token
}

const User = mongoose.model<User, IUser>("User", userSchema)
export default User
