const { GetLocation, GetMessage } = require('./get_data.js');

describe('GetMessage Testing', () => {
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

    test('All satelites with empty messages', () => {
        let kenobi_msg = [];
        let skywalker_msg = [];
        let sato_msg = [];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual("");
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

        expect(GetMessage(test_msg)).toEqual("");
    });

    test('Missing 1 satelite message', () => {
        let kenobi_msg = ["", "este", "", "un", "mensaje"];
        let skywalker_msg = ["este", "", "un", "mensaje"];
        let sato_msg = [];
        let test_msg= [kenobi_msg, skywalker_msg, sato_msg];

        expect(GetMessage(test_msg)).toEqual("");
    });

});

describe('GetLocation Testing', () =>{
    test('Empty distances array', () => {
        expect( GetLocation([]) ).toEqual(null);
    });

    test('No input', () => {
        expect(() => { GetLocation() }).toThrowError(/^No argument passed!$/);
    });


    test('List of distance not array', () => {
        expect(() => { GetLocation(0) }).toThrowError(/^Input not an array!$/);

        expect(() => { GetLocation("String") }).toThrowError(/^Input not an array!$/);
        
        expect(() => { GetLocation('') }).toThrowError(/^Input not an array!$/);
    });

    test('No intersection between distances', () => {
        expect( GetLocation([100.0, 115.5, 142.7]) ).toBe(null);
    });

    // Can corroborate with https://www.desmos.com/calculator/cj12hc9jsk
    test('Emitter position found', () => {
        expect( GetLocation([608.276, 707.107, 948.683]).x ).toBe(-400);
        expect( GetLocation([608.276, 707.107, 948.683]).y ).toBe(400);
    });

});