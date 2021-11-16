'use strict';

const io=require('socket.io-client');
const host='http://localhost:3011';
const faker=require('faker');
const socket=io.connect(`${host}/Caps`);



    const payload={
        "store":'1-206-flowers',
        "orderId": faker.random.alphaNumeric(10),
        "customer": faker.name.findName(),
        "address": faker.address.streetAddress(),
    }
      // send to server  
      socket.emit('pickup', payload);


socket.on('delivered',(payload)=>{

    console.log(`Thanks you for delivering  ${payload.payload.orderId}`);
    socket.disconnect();
});
socket.on('added',payload=>{
    console.log('Thank u for adding my order to the Q>> ',payload);
 
})
