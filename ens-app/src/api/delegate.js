import { ethers, getNetworkId, getProvider } from '@ensdomains/ui'
import { EMPTY_ADDRESS } from 'utils/records'

const ENSTokenABI = [
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'delegates',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]

const contractAddress = '0x013FE24e027938A8EBD06F5A2Ae0B5f2232c0e23'

export default async function getShouldDelegate(address) {
  // if no address for connection
  if (!address) return false
  // if user isn't on mainnet
  // if ((await getNetworkId()) !== 1) return false
  if ((await getNetworkId()) !== 21004) return false
  try {
    const ENSTokenContract = new ethers.Contract(
      contractAddress,
      ENSTokenABI,
      await getProvider()
    )
    const balanceOf = await ENSTokenContract.balanceOf(address)
    // if address has no balance
    if (!balanceOf.gt(0)) return false
    const delegates = await ENSTokenContract.delegates(address)
    // if address already delegated
    if (delegates !== EMPTY_ADDRESS) return false
    return ethers.utils.formatEther(balanceOf)
  } catch (e) {
    console.log('error getting delegated amount', e)
  }
}
