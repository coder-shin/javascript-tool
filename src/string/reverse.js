const reverse = (s) =>  s.split('').reverse().join('');

const reverse_with_c_style = (s) => {
  let revesed_s = '';

  for(let i = s.length - 1; i >= 0; i--) {
    revesed_s += s[i];
  }

  return revesed_s;
}

const reverse_with_recursive = (s) => {
  if (s === '') {
    return '';
  } else {
    return reverse_with_recursive(s.substr(1)) + s.charAt(0);
  }
}

export default { reverse, reverse_with_c_style, reverse_with_recursive };

