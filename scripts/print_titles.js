const fs = require('fs');
const path = require('path');
const content = fs.readFileSync('imported_prompts.sql', 'utf8');
const regex = /'Case \d+: ([^']*)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log(match[1]);
}
