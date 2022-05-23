const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, './secret-folder');

async function printFiles() {
  const files = await fs.readdir(filePath, { withFileTypes: true });
  for (const file of files) {
    try {
      if (file.isFile()) {
        const extension = path.extname(file.name);
        const name = path.basename(file.name, extension);
        const size = fs.stat(`./secret-folder/${file.name}`);
        console.log(`${name} - ${extension} - ${size}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

printFiles();
