const fs = require('fs');
const newText = fs.createWriteStream('02-write-file/text.txt');

const { stdout } = process;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

stdout.write('Здравствуйте! Введите строку для записи в файл:\n');
rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  } else {
    newText.write(input + '\n');
  }
}).on('close', () => {
  stdout.write('До следующей встречи!');
});
