"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "2020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
// blockchain.push("stuff");
console.log(blockchain);
//# sourceMappingURL=blockchain.js.map