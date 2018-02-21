pragma solidity ^0.4.19;

contract Booking {
  address[8] public bookings;

  //book a property by adding the address of the booker to the bookings array
  function book(uint propertyId) public returns(uint){
    require(propertyId >= 0 && propertyId <= 7);
    bookings[propertyId] = msg.sender;

    return propertyId;
  }

  //retrieve booking status of all properties
  function getBookings() public view returns (address[8]) {
    return bookings;
  }

}
