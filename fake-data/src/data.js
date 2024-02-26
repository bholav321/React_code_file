import faker from 'faker'
import React from 'react'
function Data() {
    const name = faker.name.findName();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();
  
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
    );
  }
  

export default Data