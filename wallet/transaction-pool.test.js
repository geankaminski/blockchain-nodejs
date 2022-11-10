const TransactionPool = require('./transaction-pool.js');
const Transaction = require('./transaction.js');
const Wallet = require('./index.js');

describe('TransactionPool', () => {
    let tp, wallet, transaction;

    beforeEach(() => {
        tp = new TransactionPool();
        wallet = new Wallet();
        transaction = Transaction.newTransaction(wallet, 'r4nd-4ddr355', 30);
        tp.updateOrAddTransaction(transaction);
    });

    it('adds a transaction to the pool', () => {
        expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
    });

    it('updates a transaction in the pool', () => {
        const oldTransaction = JSON.stringify(transaction);
        const newTransaction = transaction.update(wallet, 'foo-4ddr355', 40);
        tp.updateOrAddTransaction(newTransaction);

        expect(JSON.stringify(tp.transactions.find(t => t.id === newTransaction.id))).not.toEqual(oldTransaction);
    });

});