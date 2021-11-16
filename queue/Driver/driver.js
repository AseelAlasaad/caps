'use strict';

const io=require('socket.io-client');

/*-----connect-----*/
const host='http://localhost:3011';
const socket=io.connect(`${host}/Caps`);
//get all order from Q
socket.emit('get_all');

socket.on('pickup',(payload)=>{
    console.log('get order',payload.id);
    console.log(`Picked up  ${payload.id}`);
    socket.emit('in-transit',payload);


    console.log(`delivered  ${payload.id}`);
    socket.emit('delivered',payload);
  //  console.log('deleyed payload',payload);
    socket.emit('recieved',payload);
});

// socket.on('in-transit',(payload)=>{
//     console.log('Picked up ',payload.orderId); 
 
// });

// socket.on('delivered',(payload)=>{
//     console.log(`delivered  ${payload.orderId}`);

// });
