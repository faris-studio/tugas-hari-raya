function addMoreData(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}
const myObject = { name: 'Edo', age: 20 };
const updatedObject = addMoreData(myObject, 'address', 'Jakarta');

console.log(updatedObject);

