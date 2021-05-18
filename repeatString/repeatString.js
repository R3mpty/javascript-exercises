const repeatString = function(x, y) {
    let count = 0;
    let word = [];

    if (y < 0 ){
        return "ERROR";
    }
        
    while (count != y){
        word[count] = x;
        count++;
    }

    return (word.join(''));


}

module.exports = repeatString
