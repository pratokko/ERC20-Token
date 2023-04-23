const hre = require("hardhat")

async function main() {
    const locK = await hre.ethers.getContractFactory("Token")
    const lock = await hre.ethers.deployContract()

    await lock.deployed()
    console.log(`contract Address: ${lock.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
