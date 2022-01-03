const GetMessage = require('./server_api.js');
// const GetLocation = require('./server_api.js');

test('Empty message', () => {
    let test_msg= [];
    const resultado = GetMessage(test_msg);
    expect(resultado).toEqual("");
});

test('No input', () => {
    expect(() => { GetMessage() }).toThrowError(/^No argument passed!$/)
});


test('List of messages not array', () => {
    const test_msg= 0;
    expect(() => { GetMessage(test_msg) }).toThrowError(/^Input not an array!$/)

    const test_msg2= "String";
    expect(() => { GetMessage(test_msg2) }).toThrowError(/^Input not an array!$/)
    
    
    const test_msg3= '';
    expect(() => { GetMessage(test_msg3) }).toThrowError(/^Input not an array!$/)

});

// test('Empty messages test', () => {
//     let kenobi_msg = [];
//     let skywalker_msg = [];
//     let sato_msg = [];
//     let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

//     const resultado = GetMessage(test_msg).length;
//     expect(resultado).toEqual(0);
// });


