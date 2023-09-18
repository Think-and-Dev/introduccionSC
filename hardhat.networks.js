const accounts = process.env.PRIVATE_KEY
  ? [process.env.PRIVATE_KEY]
  : {
      mnemonic: process.env.HDWALLET_MNEMONIC
    }

const networks = {
  coverage: {
    url: 'http://127.0.0.1:8555',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true
  },
  localhost: {
    chainId: 31337,
    url: 'http://127.0.0.1:8545',
    allowUnlimitedContractSize: true,
    timeout: 1000 * 60,
    blockGasLimit: 100000000429720
  }
}

if (process.env.ALCHEMY_URL && process.env.FORK_ENABLED) {
  networks.hardhat = {
    allowUnlimitedContractSize: true,
    chainId: 1,
    forking: {
      url: process.env.ALCHEMY_URL
    },
    accounts
  }
  if (process.env.FORK_BLOCK_NUMBER) {
    networks.hardhat.forking.blockNumber = parseInt(process.env.FORK_BLOCK_NUMBER)
  }
} else {
  networks.hardhat = {
    allowUnlimitedContractSize: true
  }
}

if (process.env.HDWALLET_MNEMONIC || process.env.PRIVATE_KEY) {
  networks.mumbai = {
    chainId: 80001,
    url: 'https://rpc-mumbai.maticvigil.com',
    accounts,
    live: true
  }

  networks.avalanche = {
    chainId: 43114,
    url: 'https://api.avax.network/ext/bc/C/rpc',
    accounts,
    live: true
  }

  networks.fuji = {
    chainId: 43113,
    url: 'https://api.avax-test.network/ext/bc/C/rpc',
    accounts,
    gas: 2100000,
    gasPrice: 50000000000,
    maxPriorityFeePerGas: 2000000000,
    maxFeePerGas: 51500000000,
    live: true
  }
}

//https://red-distinguished-asphalt.avalanche-testnet.discover.quiknode.pro/6e0eb89903db60e2245d123a6d91ed63202041a3/
//url: 'https://api.avax-test.network/ext/bc/C/rpc',
//blockGasLimit: 100000,

if (process.env.INFURA_API_KEY && (process.env.HDWALLET_MNEMONIC || process.env.PRIVATE_KEY)) {
  networks.goerli = {
    url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts,
    gas: 2100000,
    gasPrice: 50000000000,
    maxPriorityFeePerGas: 2000000000,
    maxFeePerGas: 51500000000,
    live: true
  }

  networks.mainnet = {
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts,
    live: true
  }
} else {
  console.warn('No infura or hdwallet available for testnets')
}

module.exports = networks
