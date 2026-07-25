import { get_encoding } from 'tiktoken';

const encoderForGpt2 = get_encoding('gpt2');

const encoded = encoderForGpt2.encode("Hello My name is Mr. Abhishek");

console.log(encoded);

const decode = encoderForGpt2.decode(encoded);

console.log(new TextDecoder().decode(decode));