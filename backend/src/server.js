import express from 'express'
import { ENV } from './lib/env.js'

const app = express()

app.get('/', (req, res)=>{
    res.status(200).json({msg:"helllo sir "})
})

app.listen(ENV.PORT, ()=>{
    console.log("server start on ", ENV.PORT)
})