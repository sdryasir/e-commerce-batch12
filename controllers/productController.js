import Product from '../models/productSchema.js'

export const getAllProducts = async function(req, res, next){

    const products = await Product.find({})

    res.json(products);
}

export const getProductById = async function(req, res, next){
    const {id} = req.params;
    const product = await Product.findById(id)
    res.json(product);
}


export const createNewProduct = async function(req, res, next){
    const newProduct = req.body;
    const r = await Product.create(newProduct)
    res.json({
        product:r
    });
}

export const updateProduct = async function(req, res, next){
    const {id} = req.params;
    const updatedProduct = req.body;

    await Product.findByIdAndUpdate(id, updatedProduct)
    res.json({
        message: 'Updated'
    });
}

export const deleteProduct = async function(req, res, next){
    const {id} = req.params;

    await Product.findByIdAndDelete(id);
    
    res.json({
        message: 'Deleted'
    });
}