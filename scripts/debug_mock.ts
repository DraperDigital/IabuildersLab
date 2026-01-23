
import { ALL_MOCK_CONTENT, MOCK_PROMPTS } from '../src/lib/mock-data';

console.log('Total Mock Items:', ALL_MOCK_CONTENT.length);
console.log('Total Mock Prompts:', MOCK_PROMPTS.length);

const nanoPrompts = MOCK_PROMPTS.filter(p => p.id.startsWith('nano'));
console.log('Nano Prompts found:', nanoPrompts.length);
console.log('Nano Prompt IDs:', nanoPrompts.map(p => p.id));
