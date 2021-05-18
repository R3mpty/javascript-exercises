const removeFromArray = function(...x) {
    let array = arguments[0];
    let ans = [];
    
    // JavaScript's for each loop has the following syntax
    array.forEach(function(item, index, array){
        if (!x.includes(item)){
            ans.push(item);
        }
    });

    return ans;
        
    
}

module.exports = removeFromArray
