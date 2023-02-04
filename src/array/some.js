// Don't do like this
const has_more_than_3_silly = (arr) => {
  const more_than_3 = arr.find((n) => n > 3);

  return Boolean(more_than_3);
}

// Do this - simple
const has_more_than_3_good = (arr) => {
  return arr.some((n) => n > 3);
}

export default {
  has_more_than_3_silly,
  has_more_than_3_good,
}
