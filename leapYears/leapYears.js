/*
Condition:
- Divisible by four
- Not divisible by 100 unless they are divisible by 400
- (Another way of saying this is not divisble by 400 but divisible by 100)
*/

const leapYears = function(x) {

    if (x % 100 == 0 && x % 400 != 0){
        return false;
    }

    if (x % 4 == 0){
        return true;
    }

    else {
        return false
    }

}

module.exports = leapYears
