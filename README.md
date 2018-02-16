# BLOCKCHAIN 101#

#Environment Setup#

##Mac OS##

**1. Homebrew**

[Homebrew](http://brew.sh) is a package manager for Mac OS. We will use it to install the packages necessary to work with Ethereum.

To get Homebrew, run the following command in your terminal:

	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

**2. Node**

Next, we'll need [Node.js](http://nodejs.org). To install it anew, run the following command:

	brew install node
	
If you already have node installed, ensure that you are running version 8.9.4 or later. To check your current version, run:

	node -v
	
**3. Geth**

Go Ethereum, or Geth, is a command line interface for running and operating Ethereum nodes. You can install it with brew:

	brew tap ethereum/ethereum

	brew install ethereum

Then, run the following command to initialize Geth. You'll want to do this once before the workshop because the first run takes some time to complete. 

	geth

**4. Text Editor**

You may use your text editor of choice, but we recommend Atom or Visual Studio Code. Using one of these, download and install the Solidity language package - you will need it for your smart contracts.

- Get Visual Studio Code [here](https://code.visualstudio.com/)
- Get Atom [here](http://atom.io) 

If you are using Visual Studio, use the package manager to install the solidity package by Juan Blanco:

![Visual Studio Code Ethereum Package](images/vscode-ethereum.png)

If you are using Atom, use the installer to install language-ethereum:

![Atom Ethereum Language Package](images/atom-ethereum.png)

Once you have installed the language, be sure to restart the text editor before beginning your project so the changes take effect.

**5. Ganache CLI (Formerly TestRPC)**

Ganache is an Ethereum node implemented in JS that acts as an emulator for blockchain test networks, allowing you to test your smart contracts locally instead of on the real net. To install it, run the following in your terminal:

	brew install ganache-cli
	
To confirm that Ganache installed successfully, run the following command:

	ganache-cli
	
This will start up a new node.

**6. Truffle**

Truffle is a smart contract framework we will use to build and deploy our contracts. To install it, run the following command:

	npm install -g truffle




##Windows


**1. Node.js**

We will be using [Node.js](http://nodejs.org) along with our Ethereum tools. to install it anew, run the following command in your Command Prompt:

	npm install -g node
	
If you have a previous version of Node installed, you'll want to be sure you're working with 8.9.4 or later. To check the version you currently have installed:
	
	node -v


**2. Geth**

Go Ethereum, or Geth, is a command line interface for running and operating Ethereum nodes. We will use Geth to test our application before fully deploying to the live network.

Get Geth [here](http://geth.ethereum.org/downloads)

Then, run the following command to initialize Geth. You'll want to do this once before the workshop because the first run takes some time to complete. 

	geth


**3. Text Editor**

You may use your text editor of choice, but we recommend Atom or Visual Studio Code. Using one of these, download and install the Solidity language package - you will need it for your smart contracts.

- Get Visual Studio Code [here](https://code.visualstudio.com/)
- Get Atom [here](http://atom.io) 

If you are using Visual Studio, use the package manager to install the solidity package by Juan Blanco:

![Visual Studio Code Ethereum Package](images/vscode-ethereum.png)

If you are using Atom, use the installer to install language-ethereum:

![Atom Ethereum Language Package](images/atom-ethereum.png)

Once you have installed the language, be sure to restart the text editor before beginning your project so the changes take effect.


**4. Ganache CLI (Formerly TestRPC)**

Ganache is an Ethereum node implemented in JS that acts as an emulator for blockchain test networks, allowing you to test your smart contracts locally instead of on the real net. To install it, run the following:

	npm install -g ganache-cli
	
To confirm that Ganache installed successfully, run the following command:

	ganache-cli
	
This will start up a new node.

**5. Truffle**

Truffle is a smart contract framework we will use to build and deploy our contracts. To install, run the following npm command:

	npm install -g truffle

Confirm that installation was successful by checking the version:
	
	truffle --version
	


##Linux##

**1. Node.JS**

Install curl

	sudo apt install curl

Download Node.JS using the commands for your distribution, found [here](https://nodejs.org/en/download/package-manager/).

Ensure you are using a recent stable version of Node. To check your current version of Node and NPM, run the following commands:

	node -v
	npm -v

**2. Geth**

Install:

	sudo apt install software-properties-common
	
Add ethereum repository:

	sudo add-apt-repository -y ppa:ethereum/ethereum

Update:
	
	sudo apt update
	
And finally, install Geth:
	
	sudo apt install ethereum

To check the Geth version:

	geth version

**3. Ganache CLI**

Ganache is an Ethereum node implemented in JS that acts as an emulator for blockchain test networks, allowing you to test your smart contracts locally instead of on the real net. To install it, run the following:

	sudo npm install -g ganache-cli

**4. Truffle**

Truffle is a smart contract framework we will use to build and deploy our contracts. To install it, run the following command:

	sudo npm install -g truffle
	
**5. Text Editor**

You may use your text editor of choice, but we recommend Atom or Visual Studio Code. Using one of these, download and install the Solidity language package - you will need it for your smart contracts.

- Get Visual Studio Code [here](https://code.visualstudio.com/)
- Get Atom [here](http://atom.io) 

If you are using Visual Studio, use the package manager to install the solidity package by Juan Blanco:

![Visual Studio Code Ethereum Package](images/vscode-ethereum.png)

If you are using Atom, use the installer to install language-ethereum:

![Atom Ethereum Language Package](images/atom-ethereum.png)

Once you have installed the language, be sure to restart the text editor before beginning your project so the changes take effect.
