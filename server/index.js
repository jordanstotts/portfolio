const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/resume", (req,res) => {
    res.download("./Jordan Stotts-ResumePDF.pdf")
})

app.listen(4000)