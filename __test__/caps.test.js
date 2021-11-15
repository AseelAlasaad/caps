'use strict';

const caps = require('../modular/caps/caps');
let consoleSpy;

let payload = {
    store: '1-206-flowers',
    orderID: '1covrg2007',
    customer: 'Jamal Braun',
    address: '0284 Thad Hollow'
}

beforeEach((done) => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    done();
});
afterEach((done) => {
    caps.close();
    consoleSpy.mockRestore();
    done();
});

describe('testing event', () => {

    it('test pickup',async () => {

        caps.emit('pickup', payload);
        await consoleSpy();
  
        expect(consoleSpy).toHaveBeenCalled();
        
    })

    it('test in-transit', async  () => {

        caps.emit('in-transit', payload);
       await  consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
        })

    it('test delivered',async () => {

        caps.emit('delivered',payload);
      await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })




});