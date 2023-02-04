const decimal_seperators = (strs, ...args) => {
  return args.reduce((a, c, i) => {
    return a + strs[i] + (c.toString()).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
  }, '') + strs[strs.length - 1]
};

export default { decimal_seperators }
