// import GetLocation from './server_api.js';
import GetMessage from './server_api';
// const GetMessage = requiere('./server_api.js');

test('Simple test', () => {
    const resultado = GetMessage("Hola");
    expect(resultado).toBe("Hola");
});