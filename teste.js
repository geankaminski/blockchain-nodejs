const Block = require('./block.js');

const block = new Block('foo', 'bar', 'zoo', 'baz');

console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), 'primeiro bloco');
console.log(primeiroBloco.toString());