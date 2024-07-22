const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: String,
    designation: String,
    dateOfJoining: {
        type: Date,
        default: new Date()
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee