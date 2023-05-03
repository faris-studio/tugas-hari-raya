function removeElement(array, position) {
  if (position === 'left') {
    array.shift();
  } else if (position === 'right') {
    array.pop();
  }
  return array;
}
