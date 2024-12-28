const express = require('express');
const app =express();
const port = 8000;

//Middleware
app.use(express.json());

// Handle GET request
app.get('/', (req, res) => {
    res.send('Response for GET request');
  });
  
  // Handle POST request
  app.post('/', (req, res) => {
    res.send('Response for POST request');
  });
  
  // Handle PUT request
  app.put('/', (req, res) => {
    res.send('Response for PUT request');
  });
  
  // Handle DELETE request
  app.delete('/', (req, res) => {
    res.send('Response for DELETE request');
  });
  
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`)
})
