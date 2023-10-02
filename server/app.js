const express=require('express') //require is used to import express package.
const mongoose=require('mongoose') //const indicate no reintialisation
const cors=require('cors')//connect backend and front end of different host ids.
const bodyParser=require('body-parser')
const alienRouter=require('./routes/aliens')// ./ indicate they belong of same folder.
const url='mongodb://127.0.0.1:27017/CBIT'// It is the url of the db
mongoose.connect(url)//mongoose connect application with db
const con = mongoose.connection
con.on('open', () =>//open is the function name.If connection is on,these open function will be tiggered.
{
console.log('connected...')
})
const app=express()//use app we can use all functions of express
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())//parse json object from http request
app.use('/aliens',alienRouter)//access aliens with name as alienRouter.It provides security
app.listen(9001, () =>//server is at port 9000 and ready to accept request then print server started at console
{
console.log('Server started')
})