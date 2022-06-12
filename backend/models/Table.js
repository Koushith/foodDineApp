const mongoose = require("mongoose");
const { Schema } = mongoose;

const TableSchema = new Schema({
    number:{
        type: String,
        required: [true, "Please provide table name"],
        trim: true
    },
    free:{
        type: Boolean,
        default: true
    }
});

TableSchema.methods.invertStatus = function(){
    return (!this.free);
}

module.exports = mongoose.model("Table", TableSchema);