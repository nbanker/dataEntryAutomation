//the returned object is an object with arrays
//the following funciton flattens it into one object
export default flatten = (obj) => {
  return Object.keys(obj).reduce((acc, k) => {
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flatten(obj[k]));
    }
    if (k === "Name") {
      //removes # tags from names
      obj[k] = obj[k].replace('#', '');
      acc[obj[k]] = "present";
    }
    return acc;
  }, {});
};