//Nivel 1 


function GetLocation(distances ) {
    x = 0;
    y = 0;
    return x , y; 
}

function GetMessage(messages) { 
    let emisor_message = ""; 
    
    if (!Array.isArray(messages)) return "Input not an array!"; 
    if (messages.length === 0) return emisor_message ; 

    return emisor_message;
}

module.exports = GetLocation;
module.exports = GetMessage;
