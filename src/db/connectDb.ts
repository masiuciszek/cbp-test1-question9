import mongoose from "mongoose"
import "dotenv/config"

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB is connected`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDb
