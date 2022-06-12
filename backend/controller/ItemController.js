const Item = require("../models/Item");
const BigPromise = require("../middleware/BigPromise");
const cloudinary = require("cloudinary");


exports.createItem = BigPromise(
    async(req, res, next) => {
        let imageArray = [];
        if(req.files && !Array.isArray(req.files.photos)){
            let result = await cloudinary.v2.uploader.upload(req.files.photos.tempFilePath, {
                folder: "food dine app",
            });
            imageArray.push({
                id: result.public_id,
                secure_url: result.secure_url
            });
        }
        else if(req.files){
            for(let i=0; i<req.files.photos.length; i++){
                let result = await cloudinary.v2.uploader.upload(req.files.photos[i].tempFilePath, {
                    folder: "food dine app",
                });
                imageArray.push({
                    id: result.public_id,
                    secure_url: result.secure_url
                });                
            }
        }
        req.body.photos = imageArray;
        const item = await Item.create(req.body);
        res.status(200).json({
            success: true,
            item
        });
    }
);

exports.getAllItems = BigPromise(
    async(req, res, next) => {
        const items = await Item.find();
        res.status(200).json({
            success: true,
            items
        });
    }
);

exports.updateItem = BigPromise(
    async (req, res, next) => {
        let item = await Item.findById(req.params.id);
        let imageArray = [];
        // if(!item){
        //     next(new CustomError("No product found with this id", 401));
        // }
        if(req.files && !Array.isArray(req.files.photos)){
            if(item.photos){
                for(let index=0; index<item.photos.length; index++){
                    const deleteResult = await cloudinary.v2.uploader.destroy(item.photos[index].id);
                }
            }
            let result = await cloudinary.v2.uploader.upload(req.files.photos.tempFilePath, {
                folder: "food dine app",
            });
            imageArray.push({
                id: result.public_id,
                secure_url: result.secure_url
            });
        }
        else if(req.files){
            if(item.photos){
                for(let index=0; index<item.photos.length; index++){
                    const deleteResult = await cloudinary.v2.uploader.destroy(item.photos[index].id);
                }
            }
            for(let i=0; i<req.files.photos.length; i++){
                let result = await cloudinary.v2.uploader.upload(req.files.photos[i].tempFilePath, {
                    folder: "food dine app",
                });
                imageArray.push({
                    id: result.public_id,
                    secure_url: result.secure_url
                });                
            }
        }
        req.body.photos = imageArray;
        item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            item
        })
        
    }
);

exports.deleteItem = BigPromise(
    async(req, res, next)=>{
        const item = await Item.findById(req.params.id);
        // if(!product){
        //     next(new CustomError("No product found with this ID", 401));
        // }
        if(item.photos){
            for (let index = 0; index < item.photos.length; index++) {
                await cloudinary.v2.uploader.destroy(item.photos[index]);
            }
        }
        await item.remove();
        res.status(200).json({
            success: true,
            message: "Item was deleted"
        });
    }
);

exports.getOneItem = BigPromise(
    async(req, res, next) => {
        const item = await Item.findById(req.params.id);
        res.status(200).json({
            success: true,
            item
        });
    }
);