const insert_crlf = (len) => {
  const CRLF = '\r\n';
  const chunkStringByLength = (l) => {
    return (s) => s ? s.match(new RegExp('.{1,' + l + '}', 'g')).join(CRLF) : '';
  };

  return chunkStringByLength(len);
}

const insert_crlf_every_5_len = insert_crlf(5);
const insert_crlf_every_1_len = insert_crlf(1);

console.log(insert_crlf_every_5_len('abcdefghi'));
// abcde
// fghi

console.log(insert_crlf_every_1_len('abcdefghi'));
// a
// b
// c
// d
// e
// f
// g
// h
// i

console.log(insert_crlf(2)('abcdefghi'));
// ab
// cd
// ef
// gh
// i

console.log(insert_crlf(100)(''));
// ''

console.log(insert_crlf(100)('abc'));
// abc
