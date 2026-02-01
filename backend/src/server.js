import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.status(200).json({msg:"helllo sir "})
})

app.listen(3000, ()=>{
    console.log("server start on 3000")
})