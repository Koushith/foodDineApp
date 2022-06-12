const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

const OrderSchema = new Schema({
    table:{
        type: ObjectId,
        ref: "Table",
        required: [true, "Please provide table ID"]
    },
    orderItems:[ {
        type: mongoose.Schema.ObjectId,
        ref: "OrderItem",
        required: [true, "Please provide item to place order"]
    }],
    amount:{
        type: Number,
        required: [true, "Please calculate amount"]
    },
    status:{
        type: String,
        enum:{
            values:[
                "ordered",
                "preparing" ,  
                "prepared"
            ],
            message: "Please select appropriate status"
        },
        default: "ordered"
    }

    
});

module.exports = mongoose.model("Order", OrderSchema);