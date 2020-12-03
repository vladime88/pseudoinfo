import React, { useContext, useState} from 'react'
// import { ethers } from 'ethers'
import { Web3Context } from './hooks/useWeb3'
import { PseudoStorageContext } from './App'

function Dapp() {
  const [web3State, login] = useContext(Web3Context)
  const pseudoStorage = useContext(PseudoStorageContext)
 

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