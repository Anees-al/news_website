import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import newsRoute from './routes/newsRoute.js'
dotenv.config();
const app=express();

app.use(cors(
    {
        
    }
))
app.use(express.json())
app.use('/api/news',newsRoute)

const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`the server is running in the port ${port}`)
})
