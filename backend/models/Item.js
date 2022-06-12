const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");


const ItemSchema = new Schema({
    name:{
        type: String,
        // required: [true, "Please provide item name"],
        trim: true
    },
    desc:{
        type: String,
        trim: true
    },
    photos: [{
        id:{
            type: String,
            // required: [true, "Please provide image ID"]
        },
        secure_url:{
            type: String,
            // required: [true, "Please provide secure URL"]
        }
    }],
    isVeg: {
        type: Boolean,
        default: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        // required: [true, "Please provide item price"]
    },
    bestseller: { 
        type: Boolean,
        default: false
    }
});

ItemSchema.methods.changeAvailability = function(){
    return !this.isAvailable;
}

ItemSchema.methods.changeVeg = function(){
    return !this.isVeg;
}

ItemSchema.methods.changeBestseller = function(){
    return !this.bestseller;
}

module.exports = mongoose.model("Item", ItemSchema);