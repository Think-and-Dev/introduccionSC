const {dim, green, cyan, chainName, displayResult} = require('../utils/utils')
const version = 'v0.1.0'
const contractName = 'Ballot'
const {verifyContract} = require('../utils/verifyContracts')

module.exports = async (hardhat) => {
  const {getNamedAccounts, deployments, getChainId, network, ethers} = hardhat
  const {deploy} = deployments
  const {deployer} = await getNamedAccounts()

  const chainId = parseInt(await getChainId(), 10)

  const isTestEnvironment = chainId === 31337 || chainId === 1337

  dim('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  dim(`Blockchain Canis Contracts - Deploy ${contractName}`)
  dim('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')

  dim(`network: ${chainName(chainId)} (${isTestEnvironment ? 'local' : 'remote'})`)
  dim(`deployer: ${deployer}`)

// [propuesta1, propuesta2]
// keccak-256 online https://emn178.github.io/online-tools/keccak_256.html
  const constructorArguments = [["0x6233e241cc855e97d8583c560d8ce56c045abaa95f866e5beba70f04c93b1cce", "0xea6dad0ce6617f606e3301c61c1c24c544113410223153602cfc602d1820e016"]]

  cyan(`\nDeploying ${contractName}...`)
  const BallotResult = await deploy(contractName, {
    args: constructorArguments,
    contract: contractName,
    from: deployer
  })

  displayResult(contractName, BallotResult)

  dim('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  green('Contract Deployments Complete!')
  dim('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')

  await verifyContract(network, BallotResult, contractName, constructorArguments)

  return true
}

const id = contractName + version
module.exports.tags = [contractName, version]
module.exports.id = id
