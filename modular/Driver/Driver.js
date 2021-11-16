'use strict';

const io=require('socket.io-client');

/*-----connect-----*/
const host='http://localhost:3010';
// const driverConnection=io.connect(host);
//  const driverConnection=io.connect(`${host}/Driver`);
const vendorsConnection=io.connect(`${host}/Vendors`);
vendorsConnection.on('pickup',handelDriver);

function handelDriver(payload){

    setInterval(() => {
        // DRIVER: picked up <ORDER_ID>
        console.log(`Picked up  ${payload.orderId}`);
         // .emit is a method used 
         vendorsConnection.emit('in-transit',payload);

          // DRIVER: delivered up <ORDER_ID>
          console.log(`delivered  ${payload.orderId}`);
          vendorsConnection.emit('delivered',payload);
     }, 2000);
}