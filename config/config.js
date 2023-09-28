import mongoose from 'mongoose';

export const connectDb = async ()=>{    
    try {
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
        console.log('database is connected at port:', res.connection.port);
    } catch (error) {
        console.log('connection error', error);
    }
}