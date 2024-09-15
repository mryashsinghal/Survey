const  express =  require('express');
const  fs  = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/',(req,res)=>{
   let data = req.body;
   console.log(data);
   //here the answer is saved to the database safely

})

app.listen(5000);