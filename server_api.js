//Nivel 1 


function GetLocation(distances ) {
    x = 0;
    y = 0;
    return x , y; 
}

function GetMessage(messages) { 
    let emisor_message = "";
    var min_length = 100000;
    
    // Check correct type of input or throws error
    if (arguments.length === 0) throw new Error("No argument passed!");
    if (!Array.isArray(messages)) throw new Error("Input not an array!"); 
    
    // If no messages return empty message
    if (messages.length === 0) return emisor_message ; 

    //Get min length of messages
    messages.forEach(satelite_msg => {
        if (satelite_msg.length <= min_length) min_length = satelite_msg.length;
    });
    console.log('min length',min_length);

    // Delete offset
    messages.forEach(satelite_msg => {
        while (satelite_msg.length > min_length) {
            satelite_msg.shift();
        };
    });

    // Restore message
    messages.forEach(satelite_msg => {
        while (satelite_msg.length > min_length) {
            satelite_msg.shift();
        };
        console.log(satelite_msg);
    });



    return emisor_message;
}

var kenobi_msg = ["", "este", "es", "un", "mensaje"]; // 5
var skywalker_msg = ["este", "", "un", "mensaje"];  // 4
var sato_msg = ["", "", "es", "", "mensaje"];  // 5

GetMessage([kenobi_msg, skywalker_msg, sato_msg]);

module.exports = GetLocation;
module.exports = GetMessage;
