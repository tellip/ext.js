// Reflect.ownSize = obj => Reflect.ownKeys(obj).length;
// Reflect.forEach = (obj, cb) => Reflect.ownKeys(obj).forEach(key => cb(obj[key], key, obj));
// Reflect.reduce = (obj, cb, ...rest) => {
//     let keys = Reflect.ownKeys(obj);
//     rest.length || rest.push(obj[keys.shift()]);
//     return keys.reduce(
//         (acc, key) => cb(acc, obj[key], key, obj),
//         ...rest
//     );
// };
Reflect.map = (obj, cb) => Object.values(obj).reduce((acc, [key,value]) => {
    acc[key] = cb(value, key, obj);
    return acc;
}, {});
// Reflect.every = (obj, cb) => Reflect.ownKeys(obj).every(key => cb(obj[key], key, obj));
// Reflect.some = (obj, cb) => Reflect.ownKeys(obj).some(key => cb(obj[key], key, obj));
Reflect.filter = (obj, cb) => Object.values(obj).filter(([key,value]) => cb(value, key, obj)).reduce((acc, [key,value]) => {
    acc[key] = value;
    return acc;
}, {});
Function.iterate = (callback, ...args) => callback((...args) => Function.iterate(callback, ...args), ...args);