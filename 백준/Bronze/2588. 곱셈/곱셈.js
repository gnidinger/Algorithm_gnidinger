const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);

    console.log(a * (b % 10));
    console.log(a * Math.floor((b % 100) / 10));
    console.log(a * Math.floor(b / 100));
    console.log(a * b);
});
