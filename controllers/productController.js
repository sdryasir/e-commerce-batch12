import { products } from "../db.js";

export const getAllProducts = function(req, res, next){
    res.json(products);
}

export const getProductById = function(req, res, next){
    const {id} = req.params;
    console.log(id);
    res.json({
        message:"Single product"
    });
}


export const createNewProduct = function(req, res, next){
    const newProduct = req.body;
    res.json({
        product:newProduct
    });
}

export const updateProduct = function(req, res, next){
    res.json({
        message: 'Update function called'
    });
}

export const deleteProduct = function(req, res, next){
    console.log(req.query);
    
    res.json({
        message: 'Delete function called'
    });
}