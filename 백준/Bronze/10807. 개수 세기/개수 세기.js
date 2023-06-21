const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const n = Number(input.shift());
    const arr = input.shift().split(' ').map(Number);
    const v = Number(input.shift());
    const count = arr.filter((item) => item === v).length;
    console.log(count);
});
