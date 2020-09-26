const express=require('express');
const mongoose=require('mongoose');
const app=express();
const url='mongodb+srv://ravi_gautam108:ravigautam1997@cluster1.1htle.mongodb.net/aliensDBex?retryWrites=true&w=majority'
//connect your application to the database
mongoose.connect(url,{useNewUrlParser: true});
const con=mongoose.connection;
con.on('open',()=>{
    console.log('connected.....');
});
app.use(express.json);
const alienRouter=require('./routers/aliens');
app.use('/aliens',alienRouter);


app.listen(900,()=>{
    console.log('Server Started');
})