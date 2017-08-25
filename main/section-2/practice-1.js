'use strict';


function find(collection, ch) {
    var result = collection.find(function (obj) {
            return obj.key === ch;
    });
    if(result === undefined){
        return null;
    }else {
        return result;
    }
}

module.exports = function countSameElements(collection) {
    let result = [];

    collection.forEach((item) => {
        let obj = find(result, item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });

    return result;
}
