'use strict';

const { expect } = require('@jest/globals');
const event = require('../module/event');
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

        event.emit('pickup', payload);
       consoleSpy();
  
        expect(consoleSpy).toHaveBeenCalled();
    })

    it('test in-transit',  () => {

        event.emit('in-transit', payload);
         consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
        })

    it('test delivered', () => {

        event.emit('delivered', payload);
       consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

});