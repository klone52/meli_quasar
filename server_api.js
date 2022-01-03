//Nivel 1 


function GetLocation(distances ) {
    x = 0;
    y = 0;
    return x , y; 
}

function GetMessage(messages) { 
    let emisor_message = ""; 
    
    console.log(arguments.length);

    if (arguments.length === 0) throw new Error("No argument passed!");
    if (!Array.isArray(messages)) throw new Error("Input not an array!"); 
    if (messages.length === 0) return emisor_message ; 

    return emisor_message;
}

module.exports = GetLocation;
module.exports = GetMessage;
