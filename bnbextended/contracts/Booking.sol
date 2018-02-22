pragma solidity ^0.4.19;

contract Booking {
  address[8] public bookings;
  uint256 revenue;
  uint256 capacity;
  uint256 rate;
  string name;
  string propertyType;
  string location;
  address booker;
  address receiveValue = 0x0;

  function Booking() public{
    revenue = 0;
  }

  //book a property by adding the address of the booker to the bookings array
  function book(uint propertyId) payable public returns(uint){
    require(propertyId >= 0 && propertyId <= 7);
    booker = msg.sender;
    bookings[propertyId] = booker;

    //pay contract from buyer's account
    receiveValue.transfer(msg.value);
    return propertyId;
  }

  //retrieve booking status of all properties
  function getBookings() public view returns (address[8]) {
    return bookings;
  }

  function getProperty() public view returns (address _booker, string _name, string _propertyType, uint256 _capacity, string _location, uint256 _rate) {
      return(booker, name, propertyType, capacity, location, rate);
}

}
