import express from 'express';
import { users, products } from './db.js';
const app = express();



app.get('/products', function(req, res, next){
    res.json(products);
})

app.get('/users', function(req, res, next){
    res.json(users)
})


app.listen(8000, (c)=>{
    console.log('Server is listening at port 8000')
});

