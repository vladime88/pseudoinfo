export const MaxInfo_address =
  '0x6C086DC2824E7D5391e5ED40Ae303D6e80A85cDe'

export const MaxInfo_abi = [
    {
      "inputs": [],
      "name": "getInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "sender_balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "block_number",
              "type": "uint256"
            }
          ],
          "internalType": "struct MaxInfo.Info",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]