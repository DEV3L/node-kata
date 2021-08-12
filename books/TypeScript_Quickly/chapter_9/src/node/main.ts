import { Blockchain } from '../lib/bc_transactions';

(async function main(): Promise<void> {
  console.log('⏳ Initializing the blockchain, creating the genesis block...');

  const blockChain = new Blockchain();
  await blockChain.createGenesisBlock();

  blockChain.createTransaction({ sender: 'John', recipient: 'Kate', amount: 50 });
  blockChain.createTransaction({ sender: 'Kate', recipient: 'Mike', amount: 10 });

  await blockChain.minePendingTransactions();

  blockChain.createTransaction({ sender: 'Alex', recipient: 'Rosa', amount: 15 });
  blockChain.createTransaction({ sender: 'Gina', recipient: 'Rick', amount: 60 });

  await blockChain.minePendingTransactions();

  console.log(JSON.stringify(blockChain, null, 2));
})();
