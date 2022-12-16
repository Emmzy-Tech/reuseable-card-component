import './styles.css';
import React from "react";
import Card from "./Card";
import contacts from '../contacts';
import Avatar from './Avatar';

function createCard(contact){
  return (
    <Card 
    key={contact.id}
    name={contact.name}
    imgURL={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
    />
    )
}

function App(){
  return <div>
  <h1>Card Details</h1>
  <Avatar img="https://media.licdn.com/dms/image/D4D35AQGP6yKTKKEhXQ/profile-framedphoto-shrink_400_400/0/1666379215143?e=1671804000&v=beta&t=2NsMYdhDOiWej-pD5ePDr9rF7BOaSRcRw-LT62rs5ZE"/>
  {contacts.map(createCard)}

  </div>
}

export default App;