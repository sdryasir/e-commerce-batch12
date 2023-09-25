import express from 'express';

const app = express();
import prodctRoutes from './routes/productRoutes.js'

app.use('/api', prodctRoutes)


app.listen(8000, (c)=>{
    console.log('Server is listening at port 8000')
});

