const { ethers } = require("ethers")

require("dotenv").config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const { abi } = require("./artifacts/contracts/Token.sol/Token.json")

const provider = new ethers.provider.JsonRpdProvider(SEPOLIA_RPC_URL)

const signer = new ethers.Wallet(PRIVATE_KEY, provider)

const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)

async function initialize() {
    const initializeTx = await contract.initialize("BigToken", "BT", 18)

    await initializeTx.wait(1)

    console.log("Contract Initialized")
}

initialize().catch((error) => {
    console.error(error)
})
