'use strict';

const io=require('socket.io-client');
const host='http://localhost:3010';
const faker=require('faker');
const vendorsConnection=io.connect(`${host}/Vendors`);
// const vendorConnection=io.connect(host);
vendorsConnection.on('delivered',deliveredhandel);

function deliveredhandel(payload)
{
    console.log(`Thanks you for delivering  ${payload.orderId}`);
}
setInterval(() => {
    const payload={

        "store":'1-206-flowers',
        "orderId": faker.random.alphaNumeric(10),
        "customer": faker.name.findName(),
        "address": faker.address.streetAddress()
    }
      // .emit is a method 
      vendorsConnection.emit('pickup', payload);
  }, 2000);