
const fs = require('fs');
const path = require('path');

const file1 = path.join(process.cwd(), 'src/lib/mock-data.ts');
const file2 = path.join(process.cwd(), 'src/lib/extra-mock-prompts.ts');
const file3 = path.join(process.cwd(), 'src/lib/copy-library-data.ts');

const getContent = (p) => {
    try {
        return fs.readFileSync(p, 'utf8');
    } catch (e) {
        return "";
    }
};

const getIds = (content) => {
    const idRegex = /id:\s*"([^"]+)"/g;
    const ids = new Set();
    let match;
    while ((match = idRegex.exec(content)) !== null) {
        // Exclude tags
        if (!match[1].startsWith("t-"))
            ids.add(match[1]);
    }
    return ids;
};

const ids1 = getIds(getContent(file1));
const ids2 = getIds(getContent(file2));
const ids3 = getIds(getContent(file3));

const intersect12 = [...ids1].filter(x => ids2.has(x));
const intersect13 = [...ids1].filter(x => ids3.has(x));
const intersect23 = [...ids2].filter(x => ids3.has(x));

console.log('Intersection mock-data <-> extra-mock (duplicates):', intersect12);
console.log('Intersection mock-data <-> copy-library (duplicates):', intersect13);
console.log('Intersection extra-mock <-> copy-library (duplicates):', intersect23);
