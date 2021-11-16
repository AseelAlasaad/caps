const server=require('../queue/caps/server');

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
    server.close();
    consoleSpy.mockRestore();
});

describe('testing Caps', () => {
  

        it('test pickup',async () => {
    
            server.emit('pickup', payload);
            await consoleSpy();
    
            expect(consoleSpy).toHaveBeenCalled();
    
        })

        it('test in-transit', async  () => {

            server.emit('in-transit', payload);
           await  consoleSpy();
            expect(consoleSpy).toHaveBeenCalled();
            })
    
        it('test delivered',async () => {
    
            server.emit('delivered',payload);
          await consoleSpy();
            expect(consoleSpy).toHaveBeenCalled();
        })

});