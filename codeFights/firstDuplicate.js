function firstDuplicate(a) {
  var index;
  a.forEach(element => {
    if (a.indexOf(element) != -1) {
      return element;
    }
  });
  return -1;
}

firstDuplicate([1, 2, 3, 4, 1]);