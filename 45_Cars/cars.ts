function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[key: string]:any} []): object{
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;

};

let answer = storeCarInfo('Toyota', 'Grande', {color: 'White'}, {features: ['Automatic', 'Power Window', 'Navigation']});
console.log(answer);