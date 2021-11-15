// 'use strict';

// const io=require('socket.io-client');
// const host='http://localhost:3010';
// const faker=require('faker');

// const capsConnenction=io.connect(host);
// const vendorsconnection=io.connect(`${host}/Vendors`);

// // const payload={
    
// //     "store":'1-206-flowers',
// //     "orderId": faker.random.alphaNumeric(10),
// //     "customer": faker.name.findName(),
// //     "address": faker.address.streetAddress()
// // }

// // capsConnenction.emit('pickup',payload);

// vendorsconnection.emit('delivered',payload.orderId);