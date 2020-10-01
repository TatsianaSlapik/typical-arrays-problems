exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let min = Math.min(...array);
        return min;
    }
}

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let max = Math.max(...array);
        return max;
    }
}

exports.avg = function avg(array) {

    if (!array || array.length == 0) {
        return 0;
    } else {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avg = sum / array.length;

        return avg;
    }
}