import mongoose from "mongoose";
import scehma from "./schema.js"
const model = mongoose.model("users", schema);
export default model;