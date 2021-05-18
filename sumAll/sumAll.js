const sumAll = function(x,y) {
    let ans = 0;

    if (typeof x != "number" || typeof y != "number"){
        ans = "ERROR";
    }

    else if (x < 0 || y < 0){
        ans = "ERROR";
    }


    else if (x < y){
        for (i = x; i <= y; i++){
            ans += i;
        }
    }

    else if (x > y){
        for (i = y; i <= x; i++){
            ans += i;
        }
    }



    return ans;

}

module.exports = sumAll
