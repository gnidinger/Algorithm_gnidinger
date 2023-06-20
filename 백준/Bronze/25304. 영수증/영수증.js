const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let x = 0;
let n = 0;
let items = [];

rl.on('line', (line) => {
    if (x === 0) {
        x = parseInt(line);
    } else if (n === 0) {
        n = parseInt(line);
    } else {
        const [price, quantity] = line.split(' ').map(Number);
        items.push({ price, quantity });
        if (items.length === n) {
            let total = 0;
            for (let i = 0; i < n; i++) {
                total += items[i].price * items[i].quantity;
            }
            if (total === x) {
                console.log('Yes');
            } else {
                console.log('No');
            }
            rl.close();
        }
    }
});