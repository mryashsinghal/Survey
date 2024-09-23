const  express =  require('express');
const  fs  = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const Ans = require('./model/ans.js');
const dbConnection = require('./config/db.js')
app.use(cors());
app.use(express.json());
require('dotenv').config();
dbConnection();
 
app.post('/', async (req,res)=>{
   let data = req.body.ans;
   console.log(data);
   //here the answer is saved to the database safely

   let a  = new Ans({data});
   await a.save();
   console.log(a);

 
})

app.listen(5000);
