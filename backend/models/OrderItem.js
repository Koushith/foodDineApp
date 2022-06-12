const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const OrderItemSchema = new Schema({
    item:{
        type: ObjectId,
        ref: "Item",
        required: [true, "Please provide a item"]
    },
    quantity: {
        type: Number,
        default:0
    },
    price:{
        type:Number,
        required: [true, "Please provide price"]
    }
});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
