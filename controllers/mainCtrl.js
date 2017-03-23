let user = require('../user');
let skillz = require('./skillz');

exports.getName = (req, res, next) =>{
    res.status(200).json(user.name);
};

exports.getLoc = (req, res, next) =>{
    res.status(200).json(user.location);
};

exports.getOcu = (req, res, next) =>{
    let occs = user.occupations;
    let asc = occs.sort();
    if(!req.query.order){
        res.status(200).json(user.occupations)
    }

    switch(req.query.order){
        case 'desc':
            res.status(200).json(asc.reverse());
        break;
        case 'asc':
            res.status(200).json(asc);
        break;
        default:
            res.status(404).send('Not found')
            break;
    }
};

exports.getOcuLat = (req, res, next) =>{
    res.status(200).json(user.occupations[user.occupations.length-1]);
};

exports.getHobby = (req, res, next) =>{
   res.status(200).json(user.hobbies);
};

exports.getHobbyType = (req, res, next) =>{
        let hobbies = user.hobbies;
        let filteredHobbies = hobbies.filter(val => {
            return val.type === req.params.type;
        });

        if(filteredHobbies.length > 0) {
            res.status(200).json(filteredHobbies);
        }

        return  res.status(404).send('Not Found');
};

exports.getFamily = (req, res, next) =>{
    res.status(200).json(user.family);
};

exports.getFamilyGend = (req, res, next) =>{
    let family = user.family;
    let filteredFamily = family.filter(val =>{
        return val.gender === req.params.gender;
    });

    if (filteredFamily.length > 0){
        res.status(200).json(filteredFamily);
    }

    return res.status(404).send('not found');
};

exports.getRestaurant = (req, res, next) =>{
    if(!req.query.rating){
        res.status(200).json(user.restaurants);
    }
    let restaurants = user.restaurants;
    let restaurantsByRating = restaurants.filter(val =>{
        return val.rating >= req.query.rating;
    });
    if (restaurantsByRating.length === 0){
        return res.status(404).send('Not Found')
    }else {
        res.status(200).json(restaurantsByRating);
    }
};

exports.getRestaurantByName = (req, res, next) => {

        let restaurants = user.restaurants;
        let restaurantsByName = restaurants.filter(val =>{
            return val.name.toLowerCase() === req.params.name.toLowerCase();
        });
        if(restaurantsByName.length === 0){
            return res.status(404).send('not found');
        }
        res.status(200).json(restaurantsByName);
};

exports.changeName = (req, res, next)=>{
    if(req.body.name){
        user.name = req.body.name;
        res.status(200).json({name:user.name})
    }else{
        res.status(404).send('You need to enter name')
    }
};

exports.changeLoc = (req, res, next)=>{
    if(req.body.location){
        user.location = req.body.location;
        res.status(200).json({location:user.location})
    }else{
        res.status(404).send('You need to enter location')
    }
};

exports.postHobby = (req, res, next) =>{
    if(req.body){
        user.hobbies.push(req.body);
        res.status(200).json(user.hobbies);
    }else{
        res.status(404).send("You need to add a hobby");
    }
};

exports.postOcc = (req, res, next) =>{
    if(req.body){
        user.occupations.push(req.body.job);
        res.status(200).json(user.occupations);
    }else{
        res.status(404).send('You need to add an occupation')
    }
};

exports.postFamily = (req, res, next) =>{
    if(req.body){
        user.family.push(req.body);
        res.status(200).json(user.family);
    }else{
        res.status(404).send('You need to enter a new member');
    }
};

exports.postRestaurant = (req, res, next) =>{
    if(req.body){
        user.restaurants.push(req.body);
        res.status(200).json(user.restaurants);
    }else{
        res.status(404).send("you need to add a restaurant");
    }
};

exports.getSkillz = (req, res, next) =>{
    let skills = skillz;
    if(req.query.experience) {
        let filteredSkillz = skills.filter(val => {
            return val.experience.toLowerCase() === req.query.experience.toLowerCase();
        });
        res.status(200).json(filteredSkillz);
    }else{
        res.status(200).json(skillz);
    }
};

exports.postSkillz = (req, res, next) =>{
    if(req.body){
        skillz.push(req.body)
        res.status(200).json(skillz)
    }else {
        res.status(404).send("You need to add a skill")
    }
};

