# Blockchain Medical Record System

## Setup
1. Download Metamask Extension from chrome
2. Set your wallet to Rinkeby test network
3. Get ETH from Rinkeby Faucet

## Steps for normal starting

```
cd ethereum
npm uninstall solc
npm install --save solc@0.4.25
npm run test
npm run start

```

## How to Run System
```
npm run start
```

## How to Run Tests
```
npm run test
```

## Whenever there is a change in Solidity code, use these commands
```
cd ethereum
node compile.js
node deploy.js
```
