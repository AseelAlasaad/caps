'use strict';

const event= require('../event');
const faker=require('faker');



// Listens for a delivered
event.on('delivered',logMessage);

// payload:
// { store: '1-206-flowers',
//   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Jamal Braun',
//   address: 'Schmittfort, LA' } 

function logMessage(payload)
{
   
   console.log(`VENDOR: Thank you for delivering, ${payload.customer}`);   
}

function pickup(storename)
{
   const payload={
      
      "store":storename,
      "orderId": faker.random.alphaNumeric(10),
      "customer": faker.name.findName(),
      "address": faker.address.streetAddress()
   }
   event.emit('pickup',payload);
}

pickup('1-206-flowers');



