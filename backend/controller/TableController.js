const Table = require("../models/Table");
const BigPromise = require("../middleware/BigPromise");

exports.createTable = BigPromise(
    async (req,res,next)=>{
       const { number } = req.body;
    
        const table = await Table.create({
            number
        });

        res.status(200).json({
            success: true,
            table
        })
    }
)

exports.updateStatus = BigPromise(
    async (req, res, next) => {
        const table = await Table.findById(req.params.id);
        table.free = table.invertStatus();
        await table.save()
        res.status(200).json({
            success: true,
            table
        });
    }
);

exports.deleteTable = BigPromise(
    async (req, res, next) => {
        const table = await Table.findById(req.params.id);
        await table.remove();
        res.status(200).json({
            success: true,
            message: "Table Deleted"
        });
    }
);

exports.getOneTable = BigPromise(
    async (req, res, next) => {
        const table = await Table.findById(req.params.id);
        res.status(200).json({
            success: true,
            table
        });
    }
);

exports.getAllTables = BigPromise(
    async(req, res, next)=>{
        const tables = await Table.find();
        res.status(200).json({
            success: true,
            tables
        });
    }    
);