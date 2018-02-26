# Hello Blockchain - Smart Contract in the Command Line

First, initialize npm:

	npm init 

Then, use it to install web3 (we will specify the stable version 0.20.0) and the solidity compiler, solc:

	npm install web3@0.20.0 solc 

Then create a new solidity smart contract file, Hello.sol:

	touch Hello.sol

Open it in your favourite text editor, and write the following code: 

	//specify solidity version
	pragma solidity ^0.4.13;
	
	contract Hello {
	  //this will hold our greeting text
	  string greeting;
	
	  function Hello() public {
	    //constructor to initialize default greeting to hello
	    greeting = "hello";
	  }
	
	  function getGreeting() public view returns (string) {
	    //return the greeting
	    return greeting;
	  }
	
	  function setGreeting(string _greeting) public {
	    //set the greeting to user-provided input
	    greeting = _greeting;
	  }
	}

Back in your terminal, start the Ganache CLI:

	ganache-cli 

In a new terminal window, change into the same folder and run the following:

	Web3 = require('web3')
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')

This will create a new instance of web3, our javascript wrapper for Ethereum. We  instantiate it on port 8545 because that is the default port ganache-cli uses. 

Next, create an object to represent our solidity compiler:

	solc = require('solc')

We will use this soon to compile our source code. But first, we must read the source code in from the contract file we have written: 

	sourceCode = fs.readFileSync('Hello.sol').toString()

Then, we can compile it using solc:

	compiledCode = solc.compile(sourceCode)

Next, we'll extract the Application Binary Interface and byte code from our compiled contract:

	contractABI = JSON.parse(compiledCode.contracts[':Hello'].interface)
	
	byteCode = compiledCode.contracts[':Hello'].bytecode
	
Now that we have these, we can create an interactable contract using web3:

	greetingsContract = web3.eth.contract(contractABI)
	
And deploy it to our ganache test net:

	greetingsDeployed = greetingsContract.new({data: byteCode, from:web3.eth.accounts[0], gas: 4700000})
	
To check whether it was successfully deployed, run:

	greetingsDeployed.address
	
You should get an output of the contract's address on the network. 

Now, before we can call the actual functions in our contract, we have to create an instance of the deployed contract:

	greetingsInstance = greetingsContract.at(greetingsDeployed.address)

Now we can use this instance to call the methods and interact with the contract!

	greetingsInstance.getGreeting()
	
Should return the default output we specified in our smart contract. Now, you can run the setGreeting function to change the text. Because this function makes a change to the contract, we have to pass in the address of the account we want to send it from. For now, let's use the coinbase, or the first account created by Ganache. Let's check it's balance:

	web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]), "ether").toNumber()
	
Notice that we have to convert the balance from wei to ether - this is because we calculate the cost of deploying contracts in wei (gas), not the ether currency itself. Think of the relationship between ether and wei as being similar to the relationship between dollars and cents. 

Next, execute setGreeting with a greeting of your choice:

	greetingsInstance.setGreeting("YOUR GREETING HERE", {from: web3.eth.accounts[0]})
	
Running getGreeting again should now return your new greeting:

	greetingsInstance.getGreeting()

And now, when you check the balance of the account again, you should see it has decreased by a small amount of wei. Play around with executing these functions from different accounts, and see what happens to the balances. 

Congratulations, you've written and deployed your first smart contract! 