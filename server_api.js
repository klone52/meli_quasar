//Nivel 1 

/**
 * Restore message emited to Satelites
 * 
 * @param {Array} distances - Numbers Array with distance from emisor to each satelite 
 * @returns x: number, y: number - Emisor's coordinates 
 * @example GetLocation([100.0, 115.5, 142.7]);
 */
function GetLocation(distances ) {
    
    

/**
 * Restore message emited to Satelites
 * 
 * @param {Array} messages - 2 dimension Array with Array of string from each Satelite 
 * @returns {string} msg - Restored message 
 * @example GetMessage([["Hello","World"],["Hello",""]]);
 * 
 */
function GetMessage(messages) { 


    /** @type {Array} */
    var emisor_message = [];
    /** @type {number} */
    var min_length = 100000;
    /** @type {string} */
    var msg;
    
    // Check correct type of input or throws error
    if (arguments.length === 0) throw new Error("No argument passed!");
    if (!Array.isArray(messages)) throw new Error("Input not an array!"); 
    
    // If no messages return empty message
    if (messages.length === 0) return "" ; 

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
                if (satelite+1 == messages.length) return "";
            };
        };
    };

    msg = emisor_message.join(' ');

    return msg;
}


module.exports = GetLocation;
module.exports = GetMessage;
