import { products } from "../db.js";

import Product from '../models/productSchema.js'

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


export const createNewProduct = async function(req, res, next){
    const newProduct = req.body;
    const r = await Product.create(newProduct)
    res.json({
        product:r
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