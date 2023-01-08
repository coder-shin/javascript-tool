const decimalSperators = (strs, ...args) => {
  return args.reduce((a, c, i) => {
    return a + strs[i] + (c.toString()).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
  }, '') + strs[strs.length - 1]
};

const price = 300000000;
const amount = 4;

console.log(decimalSperators `Yesterday I bought ${amount} gucci bags.
It is a $${price} bag.
I spend ${price * amount} dollars.`);
