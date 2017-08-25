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

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];

    collectionA.forEach(item =>{
        let key = item.key;
    let count = item.count;
    if (includes(objectB.value, key)) {
        count--;
    }
    result.push({key, count});
    });
    return result;
}
