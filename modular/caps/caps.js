'use strict';

const PORT=process.env.PORT||3010;

const caps=require('socket.io')(PORT);


const vendorSystem=caps.of('/Vendors');
// const driverSystem=caps.of('/Drivers');
caps.on('connection',(socket)=>{
    console.log('Welecome');
    console.log('CONNECTED',socket.id);
})

vendorSystem.on('connection',(socket)=>{
    console.log('CONNECTED VENDORS',socket.id);
    socket.on('pickup',(payload)=>{

        const Event={
            event:'pickup',
            time:new Date(),
            payload:payload,
        }
        console.log("Event",Event);
        vendorSystem.emit('pickup',payload);

    })


})
vendorSystem.on('connection',(socket)=>{
    // console.log('CONNECTED in-transit',socket.id);
    socket.on('in-transit',(payload)=>{

        const Event={
            event:'in-transit',
            time:new Date(),
            payload:payload,
        }
        console.log("Event",Event);
        vendorSystem.emit('in-transit',payload);

    })



})

vendorSystem.on('connection',(socket)=>{
    // console.log('CONNECTED delivered',socket.id);
    socket.on('delivered',(payload)=>{

        const Event={
            event:'delivered',
            time:new Date(),
            payload:payload,
        }
        console.log("Event",Event);
        vendorSystem.emit('delivered',payload);

    })

})

//export to use caps for testing 

module.exports=caps