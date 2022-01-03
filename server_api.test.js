const GetMessage = require('./server_api.js');
// const GetLocation = require('./server_api.js');
describe('GetMessage Testing', () => {
    test('Empty message', () => {
        let test_msg= [];
        const resultado = GetMessage(test_msg);
        expect(resultado).toEqual(0);
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

    test('All satelites with empty messages', () => {
        let kenobi_msg = [];
        let skywalker_msg = [];
        let sato_msg = [];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual(0);
    });


    test('Initial Offset', () => {
        let kenobi_msg = ["", "este", "es", "un", "mensaje"];
        let skywalker_msg = ["este", "", "un", "mensaje"];
        let sato_msg = ["", "", "es", "", "mensaje"];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual("este es un mensaje");
    });

    test('Missing word', () => {
        let kenobi_msg = ["", "este", "", "un", "mensaje"];
        let skywalker_msg = ["este", "", "un", "mensaje"];
        let sato_msg = ["", "", "", "", "mensaje"];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual(0);
    });

    test('Missing 1 satelite message', () => {
        let kenobi_msg = ["", "este", "", "un", "mensaje"];
        let skywalker_msg = ["este", "", "un", "mensaje"];
        let sato_msg = [];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual(0);
    });

});