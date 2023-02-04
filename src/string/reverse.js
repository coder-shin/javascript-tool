console.log('reverse - best practice');
const reverse = (s) =>  s.split('').reverse().join('');

console.log(reverse('Hello, world!')); // !dlrow ,olleH
console.log(reverse('안녕, 세계!')); // !계세 ,녕안
console.log(reverse('おはよう、世界！')); // ！界世、うよはお
console.log(reverse('')); // ''
console.log();

console.log('reverse_with_c_style');
const reverse_with_c_style = (s) => {
  let revesed_s = '';

  for(let i = s.length - 1; i >= 0; i--) {
    revesed_s += s[i];
  }

  return revesed_s;
}

console.log(reverse_with_c_style('Hello, world!')); // !dlrow ,olleH
console.log(reverse_with_c_style('안녕, 세계!')); // !계세 ,녕안
console.log(reverse_with_c_style('おはよう、世界！')); // ！界世、うよはお
console.log(reverse_with_c_style('')); // ''


console.log('reverse_with_recursive');
const reverse_with_recursive = (s) => {
  if (s === '') {
    return '';
  } else {
    return reverse_with_recursive(s.substr(1)) + s.charAt(0);
  }
}

console.log(reverse_with_recursive('Hello, world!')); // !dlrow ,olleH
console.log(reverse_with_recursive('안녕, 세계!')); // !계세 ,녕안
console.log(reverse_with_recursive('おはよう、世界！')); // ！界世、うよはお
console.log(reverse_with_recursive('')); // ''
