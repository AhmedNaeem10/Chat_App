import StackNavigator from "./navigation/StackNavigtor";
import DataContext from "./context/DataContext";

const data =[
  {
      "id": 0,
      "name": "Ahmed",
      "messages": [{ "message": "Hello!", "time": "1:21 PM", }],
      "image": require("./images/kratos.jpg"),
      "status": "\"Fate only binds you if you let it\"",
      "msg_status": "delivered"
  }, {
      "id": 1,
      "name": "Ahmed Naeem",
      "messages": [{ "message": "Hello!", "time": "1:21 PM", }],
      "image": require("./images/kratos.jpg"),
      "status": "\"Fate only binds you if you let it\"",
      "msg_status": "delivered"
  },
  {
      "id": 2,
      "name": "Maaz",
      "messages": [{ "message": "What's up?", "time": "2:21 AM" }],
      "image": require("./images/atreus.webp"),

      "status": "Do what is necessary!",
      "msg_status": "sent"
  },
  {
      "id": 3,
      "name": "Fouzan Asif",
      "messages": [{ "message": "kal lab?", "time": "1:21 AM" }],
      "image": require("./images/durlin.jpg"),
      "status": "Available",
      "msg_status": "seen"
  },
  {
      "id": 4,
      "name": "Ahmed Ashraf",
      "messages": [{ "message": "Ok", "time": "4:21 PM" }],
      "image": require("./images/tyr.jpg"),
      "status": "Death can have me, when it earns me",
      "msg_status": "seen"
  },
  {
      "id": 5,
      "name": "Bilal",
      "messages": [{ "message": "Sir?", "time": "6:21 AM" }],
      "image": require("./images/thor.jpg"),
      "status": "Busy",
      "msg_status": "delivered"
  },
  {
      "id": 6,
      "name": "Freya",
      "messages": [{ "message": "Hola amigo!", "time": "3:04 AM" }],
      "image": require("./images/freya.webp"),
      "status": "Only dm",
      "msg_status": "delivered"
  },
  {
      "id": 7,
      "name": "Huzaifa",
      "messages": [{ "message": "Congrats", "time": "12:21 AM" }],
      "image": require("./images/kratos.jpg"),
      "status": "Leave me alone",
      "msg_status": "sent"
  },
  {
      "id": 8,
      "name": "Haris",
      "messages": [{ "message": "enjoy", "time": "12:21 PM" }],
      "image": require("./images/thor.jpg"),
      "status": "away",
      "msg_status": "delivered"
  },
  {
      "id": 9,
      "name": "Freya",
      "messages": ["Hello!"],
      "image": require("./images/freya.webp"),
      "time": "1:21 PM",
      "status": "dead",
      "msg_status": "delivered"
  },
  {
      "id": 10,
      "name": "Huzaifa",
      "messages": [{ "message": "lol", "time": "02:41 AM" }],
      "image": require("./images/kratos.jpg"),
      "time": "1:21 PM",
      "status": "Dm only in an actual urgency",
      "msg_status": "seen"
  },
  {
      "id": 11,
      "name": "Haris",
      "messages": [{ "message": "No", "time": "8:21 AM" }],
      "image": require("./images/thor.jpg"),
      "time": "1:21 PM",
      "status": "calls only",
      "msg_status": "delivered"
  },
]
export default function App() {
  
  return (
    <DataContext.Provider value={data}>
      <StackNavigator />
    </DataContext.Provider>
  );
}