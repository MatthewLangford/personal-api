let user = {
    name: 'Matthew Langford',
    location: 'Provo, UT',
    occupations: ['Awesome','Tower Climber', 'Roofer','Software Engineer'],
    hobbies: [
    {
        name: 'board games',
        type: 'fun'
    },
    {
        name: 'coding',
        type: 'code'
    },
    {
        name: 'family',
        type: 'The best'
    }
],
    family: [
    {
        name: 'Aimee',
        relation: 'Spouse',
        gender: 'Female'
    },
    {
        name: 'Mercedes',
        relation: 'Daughter',
        gender: 'Female'
    },{
        name: 'Mya',
        relation: 'Daughter',
        gender: 'Female'
    },{
        name: 'Aeris',
        relation: 'Daughter',
            gender: 'Female'
        }
],
    restaurants: [
    {
        name: "Chipotle",
        type: "The Greatest",
        rating: 1000
    },
    {
        name: "PandaExpress",
        type: "Not Chipotle",
        rating: 5
    },
    {
        name: 'Hu-Hot',
        type: 'Not Chipotle',
        rating: 9
    }
]
};

module.exports = user;

