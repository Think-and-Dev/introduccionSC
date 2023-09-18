# Ballot contracts

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/protofire/solhint/master/LICENSE)

## Installation

To run the contract, pull the repository from GitHub and install its dependencies. You will need yarn or npm installed.

```sh
git clone https://github.com/Think-and-Dev/introduccionSC
cd introduccionSC
```

## Setup

### Install dependencies

```sh
yarn
```

### Development

### Compile

```sh
yarn compile
```

The Application Binary Interfaces (ABI) for contract is available in the `abis/` directory

For instance, to pull in the MyContract ABI:

```javascript
const ballotABI = require('./abis/Ballot.json')
```

### Linter

We use [solhint](https://github.com/protofire/solhint)

To lint the code, run:

```sh
yarn hint
```

## Deployment

Start a local node and deploy the top-level contracts:

```bash
yarn start
yarn deploy localhost
```

The artifacts are available in the `deployments/` directory. For example, to pull in the Ballot artifact:

```javascript
const ballotContract = require('./deployments/fuji/Ballot.json')
const {abi, address, receipt} = ballotContract
```
### Connect Locally

Start up a [Hardhat Console](https://hardhat.dev/guides/hardhat-console.html):

```bash
yarn console --network localhost
```

### Deploy to Live Networks

Copy over .envrc.example to .envrc

```
cp .envrc.example .envrc
```

Make sure to update the enviroment variables with suitable values.

Now enable the env vars using [direnv](https://direnv.net/docs/installation.html)

```
direnv allow
```

Now deploy to a network like so:

```
yarn deploy:node goerli
yarn deploy:node mainnet
yarn deploy:node fuji
yarn deploy:node avalanche
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
