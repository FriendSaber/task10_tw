'use strict';

function includes(collection, ch) {
    var result = collection.find(function (item) {
        return item === ch;
    });
    if(result === undefined){
        return null;
    }else {
        return result;
    }
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];

    collectionA.forEach(item => {
        if (includes(objectB.value, item.key)) {
        result.push(item.key);
    }
    });

    return result;
}
