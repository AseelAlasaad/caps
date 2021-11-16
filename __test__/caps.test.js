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
    caps.close();
    consoleSpy.mockRestore();
});

describe('testing Caps', () => {
  

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