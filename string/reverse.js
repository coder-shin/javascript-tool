const reverse = (s) =>  s.split('').reverse().join('');

console.log(reverse('Hello, world!')); // !dlrow ,olleH
console.log(reverse('안녕, 세계!')); // !계세 ,녕안
console.log(reverse('おはよう、世界！')); // ！界世、うよはお
console.log(reverse('')); // ''
