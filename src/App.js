import React from 'react'
import {
  PseudoStorage_address,
  PseudoStorage_abi,
} from './contracts/PseudoStorage'
import { useContract } from './hooks/useContract'
import Dapp from './Dapp'

export const PseudoStorageContext = React.createContext(null)

function App() {
  const pseudoStorage = useContract(PseudoStorage_address, PseudoStorage_abi)

  return (
    <PseudoStorageContext.Provider value={pseudoStorage}>
      <Dapp />
    </PseudoStorageContext.Provider>
  )
}

export default App