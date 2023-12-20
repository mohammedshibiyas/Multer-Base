import express from 'express'
import router from './router.js'
import env from 'dotenv'
import connection from './Conn.js'
env.config()
const app=express()
app.use(express.static('frondend'))
app.use(express.json())
app.use('/api',router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server Started @${process.env.PORT} `);
    })
})
.catch((error)=>{console.log(error);})