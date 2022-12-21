const arr = [1, 2, 3, 4, 5, 6];

// Don't do like this
const has_more_than_3_silly = () => {
  const more_than_3 = arr.find((n) => n > 3);

  return Boolean(more_than_3);
}

// Don't do like this
const has_more_than_7_silly = () => {
  const more_than_7 = arr.find((n) => n > 7);

  return Boolean(more_than_7);
}
console.log(has_more_than_3_silly());
console.log(has_more_than_7_silly());

// Do this
const has_more_than_3_good = () => {
  return arr.some((n) => n > 3);
}

// Do this
const has_more_than_7_good = () => {
  return arr.some((n) => n > 7);
}

console.log(has_more_than_3_good());
console.log(has_more_than_7_good());

