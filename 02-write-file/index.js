const fs = require('fs');
const path = require('path');
const way = './text.txt';
const { stdout, stdin } = process;

fs.writeFile(path.join(__dirname, way), '', (err) => {
    if (err) throw err;
});

const ws = fs.createWriteStream(path.join(__dirname, way));

stdout.write('‘Sup? Write me something!\n');

process.on('SIGINT', () => {
    stdout.write('All the best\n');
    process.exit();
});

stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        stdout.write('Have a nice day!\n');
        process.exit();
    }
    ws.write(data);
});