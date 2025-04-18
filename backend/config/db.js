import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vivek_hande:PaSS6620@cluster0.mnw5big.mongodb.net/food_delivery_project').then(() => console.log("DB Connected"))
}