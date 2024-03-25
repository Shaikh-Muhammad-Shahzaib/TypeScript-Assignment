"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Toyota', 'Grande', { color: 'White' }, { features: ['Automatic', 'Power Window', 'Navigation'] });
console.log(answer);
