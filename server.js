const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = 'dbe89e64a1cd8ae0ae31b084e147f26e';


app.use(bodyParser.urlencoded({ extended: true }));
app.use (express.static('public')); //allows public folder to be accessed
app.set('view engine', 'ejs') //allows access to views folder and files 

app.get('/', function (req, res) {
  //OLD CODE res.send('Hello World!')
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      console.log(weather);
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `Temperature is ${weather.main.temp}°C`;
        let pressure = `Atmospheric Pressure is ${weather.main.pressure}`;
        let humidity = `Humidity is ${weather.main.humidity}`;
        let speed = `Wind speed is ${weather.wind.speed}`;
        let arrow = `${weather.wind.deg}`;
        let direction = `Direction is ${weather.wind.deg}°`;
        let description = `Weather description: ${weather.weather[0].description}`;
        res.render('index', {weather: weatherText, weatherPres: pressure, weatherHum: humidity, weatherSpeed: speed,
          weatherDir: direction, compArrow: arrow, icon: getDirection(arrow), weatherDesc: description, error: null});
      }
    }
  });
})

function getDirection(arrow){
  console.log('getDirection function working!')
  
  if(arrow >= 348.75 && arrow <= 11.25){
      icon = '/public/img/arrow.png';
  } 
  else if (arrow <= 11.25 && arrow <= 33.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 33.75 && arrow <= 56.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 56.25 && arrow <= 78.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 78,75 && arrow <= 101.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 101.25 && arrow <= 123.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 123.75 && arrow <= 146.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 146.25 && arrow <= 168.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 168.75 && arrow <= 191.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 191.25 && arrow <= 213.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 213.75 && arrow <= 236.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 236.25 && arrow <= 258.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 258.75 && arrow <= 281.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 281.255 && arrow <= 303.75){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 303.75 && arrow <= 326.25){
    icon = '/public/img/arrow.png';
  }
  else if (arrow <= 326.25 && arrow <= 348.75){
    icon = '/public/img/arrow.png';
  }
  return icon;
  }

app.listen(3000, function () {
  console.log('Example app listening on port 3000!') //displays message when connected
})
