import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import { connectDb } from './config/config.js';

connectDb();
app.use(bodyParser.json())

app.use('/api', prodctRoutes)


app.use((err, req, res, next)=>{
    res.json(err)
})


app.listen(8000, (c)=>{
    console.log('Server is listening at port 8000')
});

