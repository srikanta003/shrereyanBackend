// Form handling

const express = require('express');
const app = express();

app.use(express.json()) //when user send json data it convert it  
app.use(express.urlencoded({extended:true}))  //when user send data through url

app.get('/',(req,res ) => {
   res.send('Welcome to home page')
}
)


app.listen(3000,() => {
  console.log(`Server is running on http://localhost:3000`)
}
)