import express from "express"
import { dbConnect } from "./pg.config"
import moment from "moment"



const PORT = process.env.PORT || 3005
const app = express()
app.use(express.json())

app.get("/", (req,res)=>{
    // const yearStart = moment().startOf('year').format('MM-DD-YYYY');
    // const today = moment(new Date()).format('MM-DD-YYYY');
    const limit = req.query.limit ? req.query.limit : Number(10)
    // const from = req.query.from ? req.query.from : yearStart
    // const to = req.query.to ? req.query.to : today
    const page = req.query.page ? req.query.page : Number(1)
    const fullname = req.query.search ? `%${req.query.search}%` : "%%add"

    const offset = Number(limit) * (Number(page) - 1)

    dbConnect
    .query('SELECT * FROM "Staff" WHERE "FullName" LIKE $1 ORDER BY "Id" ASC LIMIT $2 OFFSET $3',[fullname,limit, offset])
    .then(data =>{
        res.json({ data, count: data.length })
    })
    .catch(err =>{
        console.log(err);
    })
    
    
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    
})