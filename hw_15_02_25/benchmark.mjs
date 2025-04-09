import { hash, createHash } from 'node:crypto';
import { bench, run } from 'mitata';

const testData = String(Math.random());
const algo = 'sha256';

bench(`crypto.hash (${algo})`, () => {
    hash(algo, testData);
});

bench(`crypto.createHash (${algo})`, () => {
    createHash(algo).update(testData).digest('hex');
});

await run({
    format: 'markdown'
});