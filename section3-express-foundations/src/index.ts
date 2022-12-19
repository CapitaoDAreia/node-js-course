const express = require("express") //import express
const app = express() //instance express to an app const

app.listen(4000, (error: any)=>{
  if(error){
    console.log('Error: ', error)
  }else{
    console.log('Success!')
  }
})