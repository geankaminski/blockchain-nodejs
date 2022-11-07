## Blockchain prototype

This is a prototype of a blockchain implementation using Node. It is not meant to be used in production, but rather to demonstrate the concepts of a blockchain.

## How to run

1. Clone the repository
2. Run `npm install`
3. Run `npm run start`
4. Peers can be added by running `HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev` (or any other port) in another terminal window