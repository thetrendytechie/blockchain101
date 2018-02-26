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
