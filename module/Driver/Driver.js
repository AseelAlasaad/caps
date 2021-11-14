'use strict';

const event=require('../event.js');



// Listens for a pickup
event.on('pickup',handelDriver);


function handelDriver(payload)
{
 // DRIVER: picked up <ORDER_ID>
  console.log(` DRIVER: Picked up  ${payload.orderId}`);

// Emit an ‘in-transit’ event to the Global Event Pool with the order payload.
  event.emit('in-transit',payload);
// DRIVER: delivered up <ORDER_ID>
  console.log(`DRIVER: delivered up ${payload.orderId}`);

// Emit a ‘delivered` event 
 event.emit('delivered',payload);

}