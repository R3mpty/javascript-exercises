const reverseString = function(x) {
    let y = "";

    for (i = x.length; i >= 0; i--){
        y += x.charAt(i);
    }

    return y;
}

module.exports = reverseString
