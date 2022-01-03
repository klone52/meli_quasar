//Nivel 1 


function GetLocation(distances ) {
    x = 0;
    y = 0;
    return x , y; 
}

function GetMessage(messages) { 
    var emisor_message = [];
    var min_length = 100000;
    
    // Check correct type of input or throws error
    if (arguments.length === 0) throw new Error("No argument passed!");
    if (!Array.isArray(messages)) throw new Error("Input not an array!"); 
    
    // If no messages return empty message
    if (messages.length === 0) return 0 ; 

    //Get min length of messages
    messages.forEach(satelite_msg => {
        if (satelite_msg.length <= min_length) min_length = satelite_msg.length;
    });
    // console.log('min length',min_length);

    // Delete offset
    messages.forEach(satelite_msg => {
        while (satelite_msg.length > min_length) {
            satelite_msg.shift();
        };
    });

    // Restore message
    for (var  word = 0; word < min_length; word++) {
        for (var satelite = 0; satelite < messages.length; satelite++) {
            if (messages[satelite][word] !== "") {
                emisor_message.push(messages[satelite][word]);
                break;
            } else {
                if (satelite+1 == messages.length) return 0;
            };
        };
    };

    const result_message = emisor_message.join(' ');

    if (result_message === "") return 0;
    else return result_message;
}


module.exports = GetLocation;
module.exports = GetMessage;
