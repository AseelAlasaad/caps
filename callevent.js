'use strict';

const event=require('./module/event');





event.on('pickup', (payload) => {
  const Event={
    event:'pickup',
    time:new Date(),
    payload:payload,
  }
  console.log("Event",Event);
  
});

event.on('in-transit', (payload) => {
  const Event={
    event:'in-transit',
    time:new Date(),
    payload:payload,
  }
  console.log("Event",Event);
});

event.on('delivered', (payload) => {
  const Event={
    event:'delivered',
    time:new Date(),
    payload:payload,
  }
  console.log("Event",Event);
});

require('./module/Driver/Driver');

require('./module/Vendor/Vendor');

