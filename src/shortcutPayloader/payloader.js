const fs = require('fs');
const ws = require('windows-shortcuts');
const path = require('path');

const [,, ...args] = process.argv;

if (typeof args[0] !== 'string' || !fs.existsSync(args[0]) || !path.extname(args[0]) === 'lnk') {
    console.error('Invalid carrier file');
    process.exit();
}

if (typeof args[1] !== 'string' || !fs.existsSync(args[1]) || !path.extname(args[1]) === 'lnk') {
    console.error('Invalid carrier file');
    process.exit()
}