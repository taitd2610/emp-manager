import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  salary: Number,
  bonus: Number,
});

module.exports =
  mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);
