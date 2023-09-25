import { products } from "../db.js";

export const getAllProducts = function(req, res, next){
    res.json(products);
}

export const getProductById = function(req, res, next){
    res.json(products);
}


export const createNewProduct = function(req, res, next){
    res.json({
        message: 'Create function called'
    });
}

export const updateProduct = function(req, res, next){
    res.json({
        message: 'Update function called'
    });
}

export const deleteProduct = function(req, res, next){
    res.json({
        message: 'Delete function called'
    });
}