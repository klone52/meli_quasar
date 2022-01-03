import GetLocation from './server_api.js';
import GetMessage from './server_api';
// const GetMessage = requiere('./server_api.js');

test('Empty message', () => {
    let test_msg= [];
    const resultado = GetMessage(test_msg);
    expect(resultado).toEqual("");
});

test('No input', () => {
    let test_msg= [];
    const resultado = GetMessage();
    expect(resultado).toEqual("Input not an array!");
});


test('List of messages not array', () => {
    const test_msg= 2;
    const resultado = GetMessage(test_msg);
    expect(resultado).toEqual("Input not an array!");

    const test_msg2= "String";
    const resultado2 = GetMessage(test_msg2);
    expect(resultado2).toEqual("Input not an array!");
    
    const test_msg3= '';
    const resultado3 = GetMessage(test_msg3);
    expect(resultado3).toEqual("Input not an array!");
});

// test('Empty messages test', () => {
//     let kenobi_msg = [];
//     let skywalker_msg = [];
//     let sato_msg = [];
//     let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

//     const resultado = GetMessage(test_msg).length;
//     expect(resultado).toEqual(0);
// });


