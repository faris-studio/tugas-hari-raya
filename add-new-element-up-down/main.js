function addElementToArray(array, element, position) {
  if (position === 'up') {
    array.unshift(element);
  } else if (position === 'down') {
    array.push(element);
  }
  return array;
}
