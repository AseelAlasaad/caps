'use strict';

const caps = require('../modular/caps/caps');
let consoleSpy;

let payload = {
    store: '1-206-flowers',
    orderID: '1covrg2007',
    customer: 'Jamal Braun',
    address: '0284 Thad Hollow'
}

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});
afterEach(() => {
    consoleSpy.mockRestore();
});

describe('testing event', () => {

    it('test pickup', () => {

        caps.emit('pickup', payload);
       consoleSpy();
  
        expect(consoleSpy).toHaveBeenCalled();
    })

    it('test in-transit',  () => {

        caps.emit('in-transit', payload);
         consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
        })

    it('test delivered', () => {

        caps.emit('delivered', payload);
       consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })




});