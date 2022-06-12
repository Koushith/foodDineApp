const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Item = require("../models/Item");
const Table = require("../models/Table");
const BigPromise = require("../middleware/BigPromise");

exports.createOrder = BigPromise(
    async (req,res,next)=>{
        const { itemArray, id } = req.body;
        let orderItems = [];
        let amount = 0;
        let table = await Table.findOne({id});
        if(table.free){
            table.free = table.invertStatus();
            await table.save();
            for(let i=0; i<itemArray.length; i++){
                const itemToOrder = await Item.findById(itemArray[i].itemId);
                amount+=(itemToOrder.price*itemArray[i].quantity);
                console.log(typeof(amount))
                const OItem = await OrderItem.create({
                    item: itemToOrder,
                    quantity: itemArray[i].quantity,
                    price: itemToOrder.price*itemArray[i].quantity
                });
                orderItems.push(OItem);
            }
            const order = await Order.create({
                table,
                orderItems,
                amount
            });
            res.status(200).json({
                success: true,
                order
            })
        }
    }
)

exports.getAllOrders = BigPromise(
    async(req, res, next) => {
        const orders = await Order.find();
        res.status(200).json({
            success: true,
            orders
        })
    }
);

exports.getOneOrder = BigPromise(
    async(req, res, next) => {
        const order = await Order.findById(req.params.id);
        res.status(200).json({
            success: true,
            order
        });
    }
);

exports.updateStatusOfOrder = BigPromise(
    async(req, res, next) => {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true, //everything is taken care by models
            useFindAndModify: false //default is also false
        });
        res.status(200).json({
            success: true,
            order
        });
    }
);


exports.deleteOrder = BigPromise(
    async (req, res, next) => {
        const order = await Order.findById(req.params.id);
        for(let i=0; i<order.orderItems.length; i++){
            await OrderItem.findById(order.orderItems[0]).remove()
        }
        const table = await Table.findById(order.table._id);
        table.free = table.invertStatus();
        await table.save()
        await order.remove();
        res.status(200).json({
            success: true,
            message: "Item Deleted"
        });
    }
);