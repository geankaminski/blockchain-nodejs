const Wallet = require('./index.js');
const TransactionPool = require('./transaction-pool.js');
const Blockchain = require('../blockchain/index.js');
const { INITIAL_BALANCE } = require('../config.js');

describe('Wallet', () => {
    let wallet, tp, bc;

    beforeEach(() => {
        wallet = new Wallet();
        tp = new TransactionPool();
        bc = new Blockchain();
    });

    describe('creating a transaction', () => {
        let transaction, sendAmount, recipient;

        beforeEach(() => {
            sendAmount = 50;
            recipient = 'r4nd-4dr355';
            transaction = wallet.createTransaction(recipient, sendAmount, bc, tp);
        });

        describe('and doing the same transaction', () => {
            beforeEach(() => {
                wallet.createTransaction(recipient, sendAmount, bc, tp);
            });

            it('doubles the `sendAmount` subtracted from the wallet balance', () => {
                expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                    .toEqual(wallet.balance - sendAmount * 2);
            });

            it('clones the `sendAmount` output for the recipient', () => {
                expect(transaction.outputs.filter(output => output.address === recipient)
                    .map(output => output.amount)).toEqual([sendAmount, sendAmount]);
            });
        });
    });
});