const express = require('express');
const fetch = require('node-fetch');
require("dotenv").config();
let router = express.Router();


router.get('/:locationName', (req, res) => {
    const locationName = req.params.locationName;
    console.log(locationName);
    
    const url =  'https://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&appid='+ process.env.API_KEY;
    
    let woeid; 

    fetch(url)
      .then(response => {  
        return response.json(); })
        .then(data => { 
          console.log(data); 
          res.send(data);
               
        })
          .catch(err => { console.log(err); });        
});

module.exports = router;0