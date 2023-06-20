const { GENESIS_DATA } = require("./config.js")
class Block {
    constructor({ timestamp, prevHash, hash, data }) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis() {
        return new this(GENESIS_DATA)
    }
}

const genesisBlock = Block.genesis()
console.log(genesisBlock)
// const block1 = new Block({ timestamp: "2/09/22", prevHash: "0xabc", hash: "0xc12", data: "hello" })
// const block2 = new Block({ timestamp: "3/09/22", prevHash: "0xc12", hash: "123", data: "world" })
// console.log(block1)
// console.log(block2)