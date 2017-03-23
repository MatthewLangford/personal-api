let express = require('express');
let bodyParser = require('body-parser');
let middleware = require('./controllers/middleware');
let mainCtrl = require('./controllers/mainCtrl');

let app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLoc);

app.get('/occupants', mainCtrl.getOcu);

app.get('/occupants/latest', mainCtrl.getOcuLat);

app.get('/hobbies', mainCtrl.getHobby);

app.get('/hobbies/:type', mainCtrl.getHobbyType);

app.get('/family', mainCtrl.getFamily);

app.get('/family/:gender', mainCtrl.getFamilyGend);

app.get('/restaurants', mainCtrl.getRestaurant);

app.get('/restaurants/:name', mainCtrl.getRestaurantByName);

app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.changeName);

app.put('/location', mainCtrl.changeLoc);

app.post('/hobbies', mainCtrl.postHobby);

app.post('/occupants', mainCtrl.postOcc);

app.post('/family', mainCtrl.postFamily);

app.post('/restaurants', mainCtrl.postRestaurant);

app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);


app.listen(3000);



