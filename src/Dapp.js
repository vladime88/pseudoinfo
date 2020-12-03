import React, { useContext, useState, useEffect} from 'react'
import { ethers } from 'ethers'
import { Web3Context } from './hooks/useWeb3'
import { PseudoStorageContext } from './App'
import { PseudoStorage_address, PseudoStorage_abi } from './contracts/PseudoStorage'

function Dapp() {
  const [web3State, login] = useContext(Web3Context)
  const pseudoStorage = useContext(PseudoStorageContext)
  const [PseudoStorage, setPseudoStorage] = useState(null);
 // const [balance, setBalance] = useState(0)

  const [getValue, setGetValue] = useState()
  const [inputValue, setInputValue] = useState()



  const handleOnClickGet = async () => {
    try {
      const res = await pseudoStorage.retrieve()
      setGetValue(res.toString())
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleOnClickSet = async () => {
    const tx = await pseudoStorage.store(inputValue)
     
   }


   // A voir:

   useEffect(() => {
    if (web3State.signer !== null) {
      setPseudoStorage(
        new ethers.Contract(
          PseudoStorage_address,
          PseudoStorage_abi,
          web3State.signer
        )
      )
    }
  }, [web3State.signer])
    

/*
 useEffect(() => {
    ;(async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const network = await provider.getNetwork()
      const _balance = await provider.getBalance(account)
      const balance = ethers.utils.formatEther(_balance)
      setNetwork(network)
      setBalance(balance)
    })()
  }, [isEnable, account])


*/

  return (
    <>
    <div>
      <h2>Network id: {web3State.chain_id}</h2>
      <h2>Network name: {web3State.network_name}</h2>
      <h2>MetaMask installed: {web3State.is_metamask ? 'yes' : 'no'}</h2>
      <h2>logged: {web3State.is_logged ? 'yes' : 'no'}</h2>
      <h2>{web3State.account}</h2>
      <h2>Balance: {web3State.balance}</h2>
      {!web3State.is_logged && (
        <>
          <button onClick={login}>login</button>
        </>
      )}
      {pseudoStorage && web3State.chain_id === 4 && (
        <>
          
            <button onClick={handleOnClickGet}>GET</button>
            <p>{getValue}</p>
            <button onClick={handleOnClickSet}>SET</button>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value)
              }}
            />
          
        </>
      )}
      </div>
    </>
  )
}

export default Dapp