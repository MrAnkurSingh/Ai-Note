const express=require('express');
const app=express();
require('dotenv').config();
require('./db')
app.use(express.json())


const noteRoutes=require('./routes/noteRoutes')
app.use('/api/notes',noteRoutes);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 
  