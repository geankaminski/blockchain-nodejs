const Transaction = require('../wallet/transaction');

class Miner {
    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions();
        /* 
        validTransactions.push(
            Transaction.rewardTransaction(this.wallet) 
        ); 
        
        this.blockchain.addBlock({ data: validTransactions });

        this.p2pServer.broadcastChain();

        this.transactionPool.clear();
        */
    }
}

module.exports = Miner;