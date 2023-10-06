import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import { connectDb } from './config/config.js';

connectDb();
app.use(bodyParser.json())

app.use('/api', prodctRoutes)


app.use((err, req, res, next)=>{

    let error = { ...err };

    error.message = err.message

    // Handling Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new Error(message);
    };

    // Handling Mongoose duplicate key errors
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        error = new Error(message);
    };

    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new Error(message);
    };


    res.json({
        error: error.message
    })
})


app.listen(8000, (c)=>{
    console.log('Server is listening at port 8000')
});











