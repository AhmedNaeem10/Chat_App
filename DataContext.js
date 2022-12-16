import React from 'react';

const dummy = [{
    "name": "Ahmed Naeem",
    "message": "Hello!",
    "image": require("./images/kratos.jpg"),
    "time": "1:21 PM",
    "status": "\"Fate only binds you if you let it\""
},
{
    "name": "Maaz",
    "message": "What's up?",
    "image": require("./images/atreus.webp"),
    "time": "10:02 AM",
    "status": "Do what is necessary!"
},
{
    "name": "Fouzan Asif",
    "message": "Kal lab?",
    "image": require("./images/durlin.jpg"),
    "time": "1:17 AM",
    "status": "Available"
},
{
    "name": "Ahmed Ashraf",
    "message": "Ok",
    "image": require("./images/tyr.jpg"),
    "time": "4:21 PM",
    "status": "Death can have me, when it earns me"
},
{
    "name": "Bilal",
    "message": "Sir?",
    "image": require("./images/thor.jpg"),
    "time": "1:07 PM",
    "status": "Busy"
},
{
    "name": "Freya",
    "message": "Hello!",
    "image": require("./images/freya.webp"),
    "time": "1:21 PM",
    "status": "Only dm"
},
{
    "name": "Huzaifa",
    "message": "Hello!",
    "image": require("./images/kratos.jpg"),
    "time": "1:21 PM",
    "status": "Leave me alone"
},
{
    "name": "Haris",
    "message": "Helo!",
    "image": require("./images/thor.jpg"),
    "time": "1:21 PM",
    "status": "away"
},
{
    "name": "Freya",
    "message": "Hello!",
    "image": require("./images/freya.webp"),
    "time": "1:21 PM",
    "status": "dead"
},
{
    "name": "Huzaifa",
    "message": "Hello!",
    "image": require("./images/kratos.jpg"),
    "time": "1:21 PM",
    "status": "Dm only in an actual urgency"
},
{
    "name": "Haris",
    "message": "Helo!",
    "image": require("./images/thor.jpg"),
    "time": "1:21 PM",
    "status": "calls only"
},
]


export let DataContext = React.createContext({data:dummy, setData: ()=>{}});