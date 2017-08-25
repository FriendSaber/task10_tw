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

function summarize(collection) {
    let result = [];

    collection.forEach(item => {
        let obj = find(result, item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
}
    });
    return result;
}

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

function discount(collection, promotionItems) {
    let result = [];

    collection.forEach(item =>{
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    });
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
