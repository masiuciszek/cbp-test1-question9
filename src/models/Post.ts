import mongoose, { Schema, Document, Model } from "mongoose"
import { User } from "./User"

export interface Post extends Document {
  title: string
  desc: string
  type: string
  author: User["_id"]
  createdAt: Date
}

// For static methods!!
interface IPost extends Model<Post> {
  foo: () => string
}

const postSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 255,
    },
    type: {
      type: String,
      enum: ["LOVE", "NEWS", "DRAMA", "TECH", "HISTORY", "SPORT", "POLITICS"],
      default: "LOVE",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Post = mongoose.model<Post, IPost>("Post", postSchema)

export default Post
