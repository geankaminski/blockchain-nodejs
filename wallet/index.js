const ChainUtil = require("../chain-util/chain-util");
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode("hex");
    }

    toString() {
        return `Wallet -
            publicKey: ${this.publicKey.toString()}
            balance  : ${this.balance}`;
    }

    sign(dataHash) {
        return this.keyPair.sign(dataHash);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

module.exports = Wallet;