function removeUnrelated(object, keys){
    keys.forEach(key => delete object[key]);
    return object;
    }

const data = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };

console.log(removeUnrelated(data, ['address'])); // { name: 'Edo', age: 20, hobbies: [ 'coding', 'reading' ] }
console.log(removeUnrelated(data, ['hobbies'])); // { name: 'Edo', age: 20, address: 'Jakarta' }
console.log(removeUnrelated(data, ['name'])); // { age: 20, address: 'Jakarta', hobbies: [ 'coding', 'reading' ] }
