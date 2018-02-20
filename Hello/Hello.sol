pragma solidity ^0.4.13;

contract Hello {
  string greeting;

  function Hello() public {
    //constructor
    greeting = "hello";
  }

  function getGreeting() public view returns (string) {
    return greeting;

  }

  function setGreeting(string _greeting) public {
    greeting = _greeting;
  }
}
