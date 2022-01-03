//Nivel 1 
const _ = require('underscore');
const intersection = require('./circle_intersection');

// Satellites positions
/** @type {Array <Array <number>>} */
const satellites_cord = [[-500.0,-200.0], [100,-100], [500, 100]];


/**
 * Calculate emitter position
 * 
 * @param {Array <number>} distances - Numbers Array with distance from emisor to each satelite 
 * @returns {{x: number, y: number} | null } x: number, y: number - Emisor's coordinates 
 * @example GetLocation([100.0, 115.5, 142.7]);
 */
function GetLocation(distances) {
    
    // Emitter's coordinates
    /** @type {number} */
    var x = 0;
    /** @type {number} */
    var y = 0;

    // Check correct type of input or throws error
    if (arguments.length === 0) throw new Error("No argument passed!");
    if (!Array.isArray(distances)) throw new Error("Input not an array!"); 
    
    // If no distances return empty message
    if (distances.length === 0) return null; 

    //Estimate Emitter position
    /**@type {Array} */
    var result = [];

    for(var i = 0; i < distances.length; i++) { 
        const next = (i+1)%distances.length;
        result.push(intersection({x: satellites_cord[i][0], y: satellites_cord[i][1], r: distances[i]},
            {x: satellites_cord[next][0], y: satellites_cord[next][1], r: distances[next]}));
    };

    // Check if any intersection fails
    if (!result[0].intersect_occurs | !result[1].intersect_occurs | !result[2].intersect_occurs){
        console.log("No hay interseccion")
        return null
    }; 
    
    /**@type {number} */
    var intersection_count = 0;
    
    // Compare set of points
    for(var j = 0; j < result.length; j++) { 

        if (_.isEqual([result[j].point_1.x, result[j].point_1.y] , [result[(j+1)%3].point_1.x, result[(j+1)%3].point_1.y])) {
            intersection_count++;
            x = result[j].point_1.x;
            y = result[j].point_1.y;
        };
        if (_.isEqual([result[j].point_1.x, result[j].point_1.y] , [result[(j+1)%3].point_2.x, result[(j+1)%3].point_2.y])) {
            intersection_count++;
            x = result[j].point_1.x;
            y = result[j].point_1.y;
        };
        if (_.isEqual([result[j].point_2.x, result[j].point_2.y] , [result[(j+1)%3].point_1.x, result[(j+1)%3].point_1.y])) {
            intersection_count++;
            x = result[j].point_2.x;
            y = result[j].point_2.y;
        };
        if (_.isEqual([result[j].point_2.x, result[j].point_2.y] , [result[(j+1)%3].point_2.x, result[(j+1)%3].point_2.y])) {
            intersection_count++;
            x = result[j].point_2.x;
            y = result[j].point_2.y;
        };
    }; 
    
    // Validate minumum 3 intersection , to avoid only 2 satellites on radius
    if (intersection_count >= 3) return {x: x , y: y};
    else return null;
}   

/**
 * Restore message emited to Satelites
 * 
 * @param {Array < Array <string>>} messages - 2 dimension Array with Array of string from each Satelite 
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


module.exports.GetLocation = GetLocation;
module.exports.GetMessage = GetMessage;
