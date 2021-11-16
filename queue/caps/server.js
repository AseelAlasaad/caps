'use strict';

const PORT=process.env.PORT||3011;
const server=require('socket.io')(PORT);

const uuid=require('uuid').v4;

//order {
//     messageID: "Unique-Message-ID",
//     payload: ORIGINAL.PAYLOAD
//   }


const msgQueue={
    order:{}
}

// caps namespace
const caps=server.of('/Caps');

caps.on('connection',(socket)=>{
    console.log('CONNECTED to Queue',socket.id);

    //add order inside msgqueue

    socket.on('pickup',payload=>{
        const id = uuid();
    //    console.log('added id')


        msgQueue.order[id]=payload;
        console.log(msgQueue);
        const Event={
            event:'pickup',
            time:new Date(),
            payload:payload,
        } 
        socket.emit('added',payload);
        console.log('Event',Event);
        //send to driver
        caps.emit('pickup',payload);
     
    });

    socket.on('in-transit',(payload)=>{
        const id = uuid();
        msgQueue.order[id]=payload;
        const Event={
            event:'in-transit',
            time:new Date(),
            payload:payload,
        }
        
        console.log("Event",Event);
        caps.emit('in-transit',payload);
    });

    socket.on('delivered',(payload)=>{
        const id = uuid();
        msgQueue.order[id]=payload;
        const Event={
            event:'delivered',
            time:new Date(),
            payload:payload,
        }
        console.log("Event",Event);
        caps.emit('delivered',payload);
    });


// Add a received event to the Global Event Pool
 // delete order from Queue
 socket.on('received',(payload)=>{
  console.log('received from driver delete order from msgQ');
  delete msgQueue.order[payload.id];
  console.log('after deleted order',msgQueue);
        });


// Add a getAll event to the Global Event Pool.
socket.on('get_all',()=>{
    console.log('get all order from driver');
    Object.keys(msgQueue.order).forEach(id=>{
        socket.emit('pickup',{id:id,payload:msgQueue.order[id]});
    })
});


})

module.exports=server;







