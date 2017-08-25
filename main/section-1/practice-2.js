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

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach(e => {
        if (includes(collectionB[0], e)) {
        result.push(e);
    }
});
    return result;
}
