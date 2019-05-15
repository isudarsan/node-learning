const request = require('request');

const url = 'https://api.darksky.net/forecast/5f812b611ef48453c56698014f6d3e67/37.8267,-122.4233';


//curl "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemFydmlzYSIsImEiOiJjanZvcDF1ZnIxZnF1NDhtdTYxdm1qaWxwIn0.SiADMG6KQPXEjBuRMn-bfQ"
request({url: url, json:true}, (error, response) => {
    //console.log(response.body.currently);

    console.log('Current temparature is : ', response.body.currently.temperature);
    console.log('Chance of rain is : ', response.body.currently.precipProbability);
});