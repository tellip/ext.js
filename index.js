Reflect.ownSize = obj => Reflect.ownKeys(obj).length;
Reflect.forEach = (obj, cb) => Reflect.ownKeys(obj).forEach(key => cb(obj[key], key, obj));
Reflect.reduce = (obj, cb, ...rest) => {
    let keys = Reflect.ownKeys(obj);
    rest.length || rest.push(obj[keys.shift()]);
    return keys.reduce(
        (acc, key) => cb(acc, obj[key], key, obj),
        ...rest
    );
};
Reflect.map = (obj, cb) => Reflect.ownKeys(obj).reduce((acc, key) => {
    acc[key] = cb(obj[key], key, obj);
    return acc;
}, {});
Reflect.every = (obj, cb) => Reflect.ownKeys(obj).every(key => cb(obj[key], key, obj));
Reflect.some = (obj, cb) => Reflect.ownKeys(obj).some(key => cb(obj[key], key, obj));
Reflect.filter = (obj, cb) => Reflect.ownKeys(obj).filter(key => cb(obj[key], key, obj)).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
}, {});
Function.loop = callback => callback() && Function.loop(callback);
Function.iterate = (callback, ...args) => callback((...args) => Function.iterate(callback, ...args), ...args);