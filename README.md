# BLOCKCHAIN 101

#Environment Setup

##Mac OS

**1. Homebrew**

[Homebrew](http://brew.sh) is a package manager for Mac OS. We will use it to install the packages necessary to work with Ethereum.

To get Homebrew, run the following command in your terminal:

	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

**2. Node**

[Node.js](http://nodejs.org)

	brew install node
	
**3. Geth**

Go Ethereum, or Geth, is a command line interface for running and operating Ethereum nodes. 

	brew tap ethereum/ethereum

	brew install ethereum

Then, run the following command to initialize Geth. This will take a while to run, but in the meantime you can move on to the next steps.

	geth

**4. Visual Studio Code**

You can use any text editor you wish, but workshop demos will be done in VS Code. 

**5. Ganache CLI (Formerly TestRPC)**
- Ganache CLI (formerly TestRPC) http://truffleframework.com/blog/testrpc-is-now-ganache
		○ Ethereum node implemented in JS
		○ NOTE: will have to redeploy smart contracts every time, this is just an emulator
		○ ->> brew install ethereumjs-testrpc

**6. Truffle**

Truffle is a smart contract framework.




##Windows


##Linux