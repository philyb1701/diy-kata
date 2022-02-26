const joinNames = namesObj => {
    let combinedNames = [];
//Took ages. For loop. Remember - https://www.w3schools.com/js/js_loop_for.asp
    for (let i = 0; i < namesObj.length; i += 1){
        combinedNames += namesObj[i].name;
        if (i === namesObj.length - 2) {
            combinedNames += " & ";
        } else if (i !== namesObj.length - 2 && i !== namesObj.length - 1) {
            combinedNames += ", ";
        }
    }
    return combinedNames
};

module.exports = joinNames;
