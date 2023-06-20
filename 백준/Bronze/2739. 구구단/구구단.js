const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('', (line) => {
    const a = parseInt(line);

    console.log(a, '*', 1, '=', a * 1);
    console.log(a, '*', 2, '=', a * 2);
    console.log(a, '*', 3, '=', a * 3);
    console.log(a, '*', 4, '=', a * 4);
    console.log(a, '*', 5, '=', a * 5);
    console.log(a, '*', 6, '=', a * 6);
    console.log(a, '*', 7, '=', a * 7);
    console.log(a, '*', 8, '=', a * 8);
    console.log(a, '*', 9, '=', a * 9);

    rl.close();
});
